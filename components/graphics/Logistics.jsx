import React from 'react';

/* When, where, what it costs — at artboard scale. Label 22px, value 36px.
   Two or three cells, never four. Sits directly above the logo, always. */
export function Logistics({ items = [], gap = 36, className = '', style, ...rest }) {
  return (
    <dl className={`logi ${className}`.trim()} style={{ gap, ...style }} {...rest}>
      {items.map((it) => <div key={it.label}><dt>{it.label}</dt><dd>{it.value}</dd></div>)}
    </dl>
  );
}
