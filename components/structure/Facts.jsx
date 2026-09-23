import React from 'react';

/* The logistics block a visitor actually came for. Two or three cells, never four —
   if it needs four, it needs a web page. Label above, value below. */
export function Facts({ items = [], columns, className = '', ...rest }) {
  return (
    <dl className={`facts ${className}`.trim()} style={columns ? { display: 'grid', gridTemplateColumns: `repeat(${columns},minmax(0,1fr))`, gap: '0 2rem' } : undefined} {...rest}>
      {items.map((it) => (
        <div key={it.label}>
          <dt>{it.label}</dt>
          <dd>{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
