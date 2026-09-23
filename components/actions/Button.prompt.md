Use Button for every call to action. Everything is a pill, and red is the primary.

```jsx
<div className="btn-row">
  <Button href="/requests/new/">Request a graphic</Button>
  <Button variant="ghost" href="#download">Download assets</Button>
</div>
```

- `ghost` only on dark or photo grounds — its border is white at 70%.
- `outline` is the cream-ground secondary.
- Hover lifts 1px and darkens red to #e62d2d. Nothing scales or bounces.
- Wrap groups in `.btn-row` for the 0.75rem gap.
