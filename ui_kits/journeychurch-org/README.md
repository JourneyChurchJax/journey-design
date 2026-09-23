# UI kit — journeychurch.org

The public church site. Four click-through screens sharing one Nav and one Footer:

| Screen | File | What it shows |
|---|---|---|
| Home | `HomeScreen.jsx` | Photo hero with left scrim, this-Sunday facts, three steps, current series, FAQ, dark next-steps close |
| Plan a visit | `VisitScreen.jsx` | Logistics, the boxed-field form with a submitted state, before-you-come FAQ |
| Messages | `MessagesScreen.jsx` | Series player, week switcher, Scripture, past-series grid |
| Give | `GiveScreen.jsx` | Arise & Build meter, amount and frequency pickers, other ways to give |

Open `index.html`. Nav links and in-page anchors switch screens; the visit form and the give pickers hold state.

## Provenance

Built from `brand/css/journey.css` — the canonical site stylesheet, values verified against the live site 31 Aug 2026 — plus the three Brand Guide pages. **The site's own page markup was not in the handoff**, so screen composition here follows the stylesheet's own layout primitives (`.split`, `.grid3`, `.stack-lg`, `.on-deep`) rather than a copied DOM. Where content was not in the source it is left blank with a note on the screen, not invented — see the past-series grid on Messages and the processor note on Give.

Every fact on these screens comes from the source material: service times, the address, Adam Hardegree as Lead Pastor, the current series and its Scripture, the Arise & Build figures, Discipleship Groups launching January, Journey Students Wednesdays 7 PM Room 200, the quarterly Healing Room, kids birth through fifth grade. Nothing else was added.
