Use Nav for the site header. It is sticky, cream, and separated by one hairline.

```jsx
<Nav
  logoSrc="assets/logo/horizontal-ember_ink.png"
  links={[{label:'Visit', href:'/visit/', current:true},{label:'Messages', href:'/messages/'}]}
  cta={<Button size="sm" href="/give/">Give</Button>}
/>
```

- Links are Inter 500, 0.9rem, #2a2824, hover to red.
- Under 900px the links collapse behind a text "Menu" toggle. There is no hamburger icon.
- No shadow and no blur on scroll. The hairline is the whole separation.
