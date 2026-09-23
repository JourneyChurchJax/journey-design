import React from 'react';

/* Eyebrow plus headline at artboard scale. Floors: eyebrow 26px, headline 86px.
   One italic red accent word, same rule as the web. */
export function ArtText({ eyebrow, accent, size = 120, eyebrowSize = 26, series = false, children, className = '', style, ...rest }) {
  return (
    <div className={className} style={style} {...rest}>
      {eyebrow ? <p className="a-eb" style={{ '--eb': eyebrowSize + 'px' }}>{eyebrow}</p> : null}
      <p className={series ? 'a-series' : 'a-h'} style={{ '--h1': size + 'px', marginTop: eyebrow ? 24 : 0 }}>
        {children}
        {accent && !series ? <>{' '}<em>{accent}</em></> : null}
      </p>
    </div>
  );
}
