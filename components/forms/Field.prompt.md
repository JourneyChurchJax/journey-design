Use Field for any form input. The ground decides the style.

```jsx
<Field id="email" label="Email" placeholder="you@example.com" />
<Field id="note" label="What do you need" as="textarea" style="box" rows={3} />
```

- `underline` is the dark-section style: transparent, 1px cream hairline, ember on focus.
- `box` is the cream style: 1px #d8d1c5, square corners, ember on focus. No radius.
- Labels are 0.72rem, 0.18em tracking, uppercase, weight 600.
- There is no error-red. Red is the accent, not a state color.
