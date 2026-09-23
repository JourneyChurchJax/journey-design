import React from 'react';

/* Deepest ink field, grain over it, columns of plain links. */
export function Footer({ blurb, columns = [], base, className = '', ...rest }) {
  return (
    <footer className={`footer grain ${className}`.trim()} {...rest}>
      <div className="container-x">
        <div className="footer-grid">
          {blurb ? (
            <div>
              <p className="t-eyebrow ember-dot">{blurb.title}</p>
              <p className="muted" style={{ marginTop: '.9rem', fontSize: '.92rem', maxWidth: '20rem' }}>{blurb.text}</p>
            </div>
          ) : null}
          {columns.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>{col.links.map((l) => <li key={l.href + l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
            </div>
          ))}
        </div>
        {base ? (
          <div className="footer-base">
            <p style={{ margin: 0 }}>{base.left}</p>
            <p style={{ margin: 0 }}>{base.right}</p>
          </div>
        ) : null}
      </div>
    </footer>
  );
}
