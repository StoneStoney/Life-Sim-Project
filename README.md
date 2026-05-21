# A Life, Unfolding

A minimalist life simulation game. No score, no lesson, no destiny — just a series of small decisions and what follows.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages** and set source to **GitHub Actions**.
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

## Loading your own events

Click **"Load your events JSON"** on the title screen and select your `life_events_clean.json`. The file must be a JSON array of event objects in this shape:

```json
[
  {
    "age_group": "childhood",
    "theme": "school",
    "rarity": 1,
    "description": "Event text here.",
    "choices": [
      { "text": "Choice A", "health": 1, "happiness": -1, "money": 0, "stress": 0 },
      { "text": "Choice B", "health": 0, "happiness":  2, "money": 1, "stress": 1 }
    ]
  }
]
```

Valid `age_group` values: `childhood`, `teen`, `young_adult`, `adult`, `middle_age`, `elderly`.

## Settings

- **Events per life stage** — how many choices you make before aging forward (3–12).
- **Starting stats** — initial values for health, happiness, money, stress (0–100).
