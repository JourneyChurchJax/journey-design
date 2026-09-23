import React from 'react';

/* FAQ row. Hairline on top, a red chevron built from two borders, nothing else.
   Native <details> so it works without script. */
export function Disclose({ summary, defaultOpen = false, children, className = '', ...rest }) {
  return (
    <details className={`disclose ${className}`.trim()} open={defaultOpen} {...rest}>
      <summary>{summary}</summary>
      {typeof children === 'string' ? <p>{children}</p> : children}
    </details>
  );
}
