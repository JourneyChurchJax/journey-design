# UI kit — Journey Command · Brand

The internal brand workspace on journeycommand.com, behind auth. Three screens behind the dark fixed sidebar:

| Screen | File | Source page |
|---|---|---|
| Overview | `OverviewScreen.jsx` | `brand/index.html` — eleven sections: logo, color, type, photography, social, series, events, stage, voice, never, download |
| Sermon series | `SeriesScreen.jsx` | `brand/sermon-series/index.html` — the one rule, the worked example, the seven-piece package |
| Events | `EventsScreen.jsx` | `brand/events/index.html` — the logistics block, the five kinds, sizes and rules |

Supporting files: `Sidebar.jsx` (the Command chrome), `Command.jsx` (shell and footer), `fit.jsx` (the series-type fitter ported from the source pages' inline script), `command.css` (page chrome ported from `brand/css/brand.css`).

Open `index.html`. The sidebar switches screens and the on-this-page list scrolls within a screen.

## Provenance

This is a close recreation, not a reinterpretation: section copy, spec lists, and artboard values are lifted from the three source pages. The sidebar is itself marked in the source as a stand-in for Command's real workspace nav, which was not in the handoff — the comment is preserved in `command.css`.

One correction was made deliberately: the announce card in the source reads "Begins Sunday Oct 19", and Oct 19 2026 is a Monday. This kit reads **Sunday Oct 18**. Confirm the real date before anything ships.
