import React from 'react';

/* All pill. Four variants, two sizes. Renders <a> when href is set, <button> otherwise.
   The arrow, when asked for, is typographic — there is no icon set. */
const VARIANTS = { primary: 'btn-primary', dark: 'btn-dark', ghost: 'btn-ghost', outline: 'btn-outline' };

export function Button({ variant = 'primary', size = 'default', href, arrow = false, children, className = '', ...rest }) {
  const cls = `${VARIANTS[variant] || VARIANTS.primary} ${size === 'sm' ? 'btn-sm' : ''} ${arrow ? 'arrow' : ''} ${className}`.replace(/\s+/g, ' ').trim();
  if (href) return <a className={cls} href={href} {...rest}>{children}</a>;
  return <button type="button" className={cls} {...rest}>{children}</button>;
}
