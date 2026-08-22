export type Retreat = {
  date: string;
  type: string;
  name: string;
  location: string;
  description: string;
  url: string;
};

const SHEET_ID = "1untSxOAy_5Ax5PMXwn-zL_uU7NO5GaYFPppLlhZRs0s";
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Sheet1`;

const editorialFallbacks: Record<string, string> = {
  "Beyond The Eternal Sands": "A once-in-a-lifetime passage through Egypt, created for those ready to step beyond the familiar. Ancient landscapes, intentional ritual, and shared discovery become a living invitation to meet your own depth, wonder, and timeless inner knowing.",
  "Salt + Soul Retreat": "An immersive Costa Rica journey where ocean, jungle, movement, breath, and community invite your whole system to soften. Expect adventure and restoration in equal measure, with spacious practices designed to help you return home feeling clearer, lighter, and fully alive.",
};

const fallbackRetreats: Retreat[] = [
  { date: "April 9–24, 2027", type: "Retreat", name: "Salt + Soul Retreat", location: "Costa Rica", description: editorialFallbacks["Salt + Soul Retreat"], url: "https://travelzenretreats.com/retreats/costa-rica-2027/" },
  { date: "November 10–20, 2027", type: "Retreat", name: "Beyond The Eternal Sands", location: "Egypt", description: editorialFallbacks["Beyond The Eternal Sands"], url: "https://wetu.com/ItineraryOutputs/Discovery/0f907595-9e8c-42ba-bc49-c6ac3ab69bd7" },
];

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (char === '"' && quoted && text[i + 1] === '"') { field += '"'; i += 1; }
    else if (char === '"') quoted = !quoted;
    else if (char === "," && !quoted) { row.push(field); field = ""; }
    else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && text[i + 1] === "\n") i += 1;
      row.push(field); rows.push(row); row = []; field = "";
    } else field += char;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}

function normalizeDate(value: string) {
  if (value === "11/10-11/20/27") return "November 10–20, 2027";
  if (value.replace("`", "") === "04/9-4/24/27") return "April 9–24, 2027";
  return value;
}

const monthIndex: Record<string, number> = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

function retreatStartTime(date: string) {
  const match = date.match(/^([A-Za-z]+)\s+(\d{1,2}).*?(\d{4})$/);
  if (!match) return Number.POSITIVE_INFINITY;

  const [, month, day, year] = match;
  const monthNumber = monthIndex[month];
  return monthNumber === undefined
    ? Number.POSITIVE_INFINITY
    : Date.UTC(Number(year), monthNumber, Number(day));
}

function sortRetreats(retreats: Retreat[]) {
  return [...retreats].sort((a, b) => retreatStartTime(a.date) - retreatStartTime(b.date));
}

export async function getRetreats(): Promise<Retreat[]> {
  try {
    const response = await fetch(SHEET_URL, { next: { revalidate: 300 } });
    if (!response.ok) return sortRetreats(fallbackRetreats);
    const rows = parseCsv(await response.text());
    const retreats = rows.slice(1).filter(row => row[1]?.toLowerCase() === "retreat" && row[2]).map(row => ({
      date: normalizeDate(row[0] || "Dates coming soon"),
      type: row[1] || "Retreat",
      name: row[2],
      location: row[3] || "Location coming soon",
      description: row[4] || editorialFallbacks[row[2]] || "A thoughtfully held journey for restoration, connection, and embodied transformation.",
      url: row[5] || "/contact",
    }));
    return sortRetreats(retreats.length ? retreats : fallbackRetreats);
  } catch {
    return sortRetreats(fallbackRetreats);
  }
}
