export type WeeklyClass = {
  day: string;
  className: string;
  time: string;
  studio: string;
  location: string;
  signUpUrl: string;
};

const SHEET_ID = "1untSxOAy_5Ax5PMXwn-zL_uU7NO5GaYFPppLlhZRs0s";
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Weekly%20Class%20Schedule`;

const fallbackClasses: WeeklyClass[] = [
  { day: "Monday", className: "Breathwork", time: "12:00 PM", studio: "Source Sanctuary Spiritual Wellness", location: "Del Mar", signUpUrl: "https://www.sourcesanctuarystudio.com/" },
  { day: "Monday", className: "Breathwork", time: "6:45 PM", studio: "Ocean Pacific Gym + Wellness", location: "Pacific Beach", signUpUrl: "https://www.oceanpacificgym.com/" },
  { day: "Tuesday", className: "Breathwork", time: "12:00 PM", studio: "Ritual Wellness Collective", location: "Pacific Beach", signUpUrl: "https://www.sdritualwellness.com/" },
  { day: "Tuesday", className: "Vinyasa-Breathwork Fusion", time: "5:30 PM", studio: "AVNU Wellness", location: "Sorrento Valley", signUpUrl: "https://www.avnuwellness.com/" },
  { day: "Wednesday", className: "Breathwork", time: "5:00 PM", studio: "Ritual Wellness Collective", location: "Pacific Beach", signUpUrl: "https://www.sdritualwellness.com/" },
  { day: "Thursday", className: "Breathwork", time: "12:00 PM", studio: "Source Sanctuary Spiritual Wellness", location: "Del Mar", signUpUrl: "https://www.sourcesanctuarystudio.com/" },
  { day: "Thursday", className: "Flow+Breathe Gentle Vinyasa", time: "2:00 PM", studio: "Source Sanctuary Spiritual Wellness", location: "Del Mar", signUpUrl: "https://www.sourcesanctuarystudio.com/" },
  { day: "Thursday", className: "Breath+Sound Immersion", time: "6:00 PM", studio: "Source Sanctuary Spiritual Wellness", location: "Del Mar", signUpUrl: "https://www.sourcesanctuarystudio.com/" },
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

export async function getWeeklyClasses(): Promise<WeeklyClass[]> {
  try {
    const response = await fetch(SHEET_URL, { next: { revalidate: 300 } });
    if (!response.ok) return fallbackClasses;

    const rows = parseCsv(await response.text());
    const classes = rows.slice(1)
      .filter((row) => row[0]?.trim() && row[1]?.trim())
      .map((row) => ({
        day: row[0].trim(),
        className: row[1].trim(),
        time: row[2]?.trim() || "Time coming soon",
        studio: row[3]?.trim() || "Studio coming soon",
        location: row[4]?.trim() || "Location coming soon",
        signUpUrl: row[5]?.trim() || "mailto:kait@elevatewithkait.com?subject=Weekly%20Class%20Question",
      }));

    return classes.length ? classes : fallbackClasses;
  } catch {
    return fallbackClasses;
  }
}
