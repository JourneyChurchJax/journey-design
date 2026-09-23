import React from 'react';

/* Sticky cream bar, one hairline, no shadow. The brand is set type by default;
   pass logoSrc to use the horizontal lockup file instead — never retype the logo
   when you have the file. */
export function Nav({ brand = 'Journey Church', logoSrc, href = '/', links = [], cta, className = '', ...rest }) {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className={`nav ${className}`.trim()} data-open={open ? 'true' : 'false'} {...rest}>
      <div className="container-x nav-in">
        <a className="nav-brand" href={href}>
          {logoSrc ? <img src={logoSrc} alt={brand} style={{ display: 'block', width: 170 }} /> : brand}
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href + l.label}><a href={l.href} aria-current={l.current ? 'page' : undefined}>{l.label}</a></li>
          ))}
          {cta ? <li>{cta}</li> : null}
        </ul>
        <button className="nav-toggle" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      </div>
    </nav>
  );
}
