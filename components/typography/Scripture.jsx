import React from 'react';

/* Newsreader. Quoted Scripture and pull-quotes ONLY — never a headline, never a title,
   never the church speaking. The italic marks the beat instead of red.
   The reference sits above as a red eyebrow. */
export function Scripture({ reference, children, className = '', style, ...rest }) {
  return (
    <div className={className} {...rest}>
      {reference ? <p className="scripture-ref">{reference}</p> : null}
      <p className="scripture" style={style}>{children}</p>
    </div>
  );
}
