import React from 'react';

/* The church's voice: Inter Tight 800, tracking -0.035em, line-height 0.95.
   Every headline gets exactly ONE italic red word, and it is the emotional beat —
   never "the", "and", or "of". Pass it as `accent`; it is appended to `children`,
   or you can place <em> yourself inside children and leave accent off. */
const SIZES = { hero: 't-hero', display: 't-display', h2: 't-h2', h3: 't-h3' };

export function Headline({ as = 'h2', size = 'display', accent, trailing = '.', children, className = '', style, ...rest }) {
  const Tag = as;
  return (
    <Tag className={`display ${SIZES[size] || SIZES.display} ${className}`.trim()} style={style} {...rest}>
      {children}
      {accent ? <>{' '}<span className="display-italic">{accent}</span></> : null}
      {accent && trailing ? trailing : null}
    </Tag>
  );
}
