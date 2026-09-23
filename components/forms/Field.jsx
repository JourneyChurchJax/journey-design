import React from 'react';

/* Two styles, decided by ground. Underline on dark. Boxed, square corners, on cream.
   Ember on focus in both. */
export function Field({ label, id, style = 'underline', as = 'input', className = '', ...rest }) {
  const Tag = as === 'textarea' ? 'textarea' : as === 'select' ? 'select' : 'input';
  const base = style === 'box' ? 'field-box' : 'field';
  return (
    <div className={`stack ${className}`.trim()} style={{ gap: '.2rem' }}>
      {label ? <label className="field-label" htmlFor={id}>{label}</label> : null}
      <Tag id={id} className={base} {...rest} />
    </div>
  );
}
