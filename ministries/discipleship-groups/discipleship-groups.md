# Discipleship Groups

Ministry. Look approved with Adam on 20 Nov 2026. Source canvas: https://claude.ai/artifact/JBSgbydxL1mdzFYxjvwd9Z (Title and Logo boards).

- **Ground:** a dark Jacksonville map redrawn from real street, river and coast data (OpenStreetMap), around 6225 Lake Gray Blvd. Files: `assets/ministries/discipleship-groups/jax-map-dark.jpg` (wide) and `jax-map-dark-tall.jpg` (story). Credit: Map data © OpenStreetMap contributors.
- **Lockup:** the real red circle J (`assets/logo/mark-white-heavy.png` in a #FF3A3A circle; on a red ground, `mark-ink-heavy.png` in a white circle), then DISCIPLESHIP stacked over GROUPS in Schibsted Grotesk 900. DISCIPLESHIP is white (ink on cream or red), tracked 0.15em to run the same width as GROUPS. GROUPS is red (white on a red ground).
- **Colors:** ground #1E1D1B, streets #2F2E2B to #58544D, red #FF3A3A. Water #6FA09C teal (Adam approved, 20 Nov 2026; outside the Journey palette, for this look only).
- **Cards:** `logo.html` (lockup on ink, cream, red), `map.html` (the map background). Fair, carousel and Reel pieces stay on the canvas, not as cards.

## More detail (from the Discipleship Groups agent, 20 Nov 2026)

- **Lockup PNGs** (1920 x 360): `assets/ministries/discipleship-groups/lockup-ink-1920x360.png`, `lockup-cream-1920x360.png`, `lockup-red-1920x360.png`.
- **Lockup proportions** at a word block 1100px wide (scale by W/1100): GROUPS 249.3px, line-height 0.84; DISCIPLESHIP 116.7px, line-height 1, tracking 0.15em with margin-right -0.15em; 14px between the lines; 44px between disc and words; disc 302px with the J at 68% (205px).
- **Red map** for carousel close slides: `jax-map-red.jpg` (2880 x 1620). Ground #FF3A3A, water #C41C1C, roads #F23232 / #E82C2C / #DC2626 / #CE2020.
- **Bounds.** Wide: lon -81.98 to -81.36, lat 30.14 to 30.4413 (drawn 3840 x 2160). Tall: lon -81.775 to -81.579, same lat (drawn 2160 x 3840). Flood-fill seeds: (3835,1080) wide, (1227,2507) tall. Road widths 2 / 4 / 6 / 10px at 3840 wide; water under 6000 px² dropped.
- **The church** (6225 Lake Gray Blvd, lon -81.7463, lat 30.2028) sits at (723, 855) on a 1920 x 1080 placement of the wide map.
- **Usage Adam approved:** headlines in Schibsted Grotesk 900 caps, white, on the dark map. Red appears only in the lockup or one phrase.
- **Data:** OpenStreetMap via Overpass (`roads2.json`, `water2.json`, too big for the repo; kept in the agent's folder `~/Developer/journey-discipleship-groups-feb/map/`). Redraw with `render-map.py`.
