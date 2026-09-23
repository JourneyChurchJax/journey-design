import React from 'react';

/* Small caps label above a headline. Names the moment.
   On cream it is --ember-small (accessibility floor for red text under ~26px).
   On dark and deep grounds journey.css flips it to --ember automatically. */
export function Eyebrow({ dot = false, line = false, tone = 'ember', children, className = '', ...rest }) {
  return (
    <p className={`t-eyebrow ${tone === 'ember' ? 'text-ember' : ''} ${dot ? 'ember-dot' : ''} ${className}`.replace(/\s+/g, ' ').trim()} {...rest}>
      {children}
      {line ? <><span style={{ display: 'inline-block', width: '.8rem' }} /><span className="eyebrow-line" /></> : null}
    </p>
  );
}
