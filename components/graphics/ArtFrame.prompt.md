Use ArtFrame for every social card, series board, and stage screen. Author inside it at real output pixels.

```jsx
<ArtFrame width={1080} height={1080} pad={80} tooth>
  <ArtText eyebrow="Prayer Night · Wednesday 7 PM" accent="boldly">Pray</ArtText>
  <Logo variant="horizontal" on="cream" width={280} />
</ArtFrame>
```

- Sizes: feed 1080 x 1080 · story 1080 x 1920 · screen 1920 x 1080 · 4K wall 3840 x 2160.
- Safe zones: square 80px · story 250px top and bottom, 80px sides · screen 96px action-safe.
- `tooth` on cream, `grain` on dark. Never both, never on a photo.
- One device per graphic: a ghosted numeral, a ghosted word, or a meter. The logo is never the device.
