# Sermon series

Each series is a folder under `series/`, and each one is free to look nothing like the last. What holds them together is not a visual language — it is a contract of two lines:

1. The reversed horizontal logo sits **bottom-right at 360px** on 1920-wide art and **bottom-left at 280px** on 1080 squares.
2. Scripture is set in **Newsreader**, always, even when the series brings its own typeface.

Everything else — type, palette, imagery, devices — belongs to the series.

## The folder

```
series/<slug>/
  skin.html        the decision: one face, one palette, one image idea, one device
  title.html       1920 x 1080
  announce.html    1080 square, the launch post
  sermon-title.html
  scripture.html
```

Tag every card `group="Series · <Name>"` so it groups itself in the Design System tab.

## Current

| Series | Slug | Status |
|---|---|---|
| A House Built for His Presence | `a-house-built` | Running. Our Culture, Vision, & Values. Fully skinned. |
| Christmas | `christmas` | **Skin undecided.** Only the "Light Has Come" square exists, carried over from the events page. Title and Scripture boards run the house look with the plate open until Adam decides the face, palette, imagery and device. |

Four to six series a year. Past series artwork was not in the handoff.
