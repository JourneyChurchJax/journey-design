import React from 'react';

/* Numbered step. The red numeral is the only ornament. */
export function Step({ number, title, children, className = '', ...rest }) {
  return (
    <div className={`step ${className}`.trim()} {...rest}>
      <span className="num">{number}</span>
      {title ? <h3 className="display t-h3">{title}</h3> : null}
      {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
  );
}
