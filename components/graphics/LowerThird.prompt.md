Use LowerThird for the name plate on a 1920 x 1080 stage screen.

```jsx
<ArtFrame width={1920} height={1080} photo="assets/photo/bowed-at-the-stage.jpg" scrim="flat">
  <LowerThird name="Adam Hardegree" role="Lead Pastor" />
</ArtFrame>
```

- 12px red bar, then a 92%-ink panel. Name Inter Tight 800 at 52px, role 22px uppercase.
- Position is locked at left 96px, bottom 96px. A series may restyle it but not move it.
- It slides in from the left over 0.6s. Nothing bounces, scales, or spins.
