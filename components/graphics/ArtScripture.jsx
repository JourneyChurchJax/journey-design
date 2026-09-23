import React from 'react';

/* Scripture at artboard scale. Newsreader, reference as the red eyebrow.
   Floor on a 1920 stage screen is 80px. */
export function ArtScripture({ reference, size = 72, children, className = '', style, ...rest }) {
  return (
    <div className={className} style={style} {...rest}>
      {reference ? <p className="a-eb">{reference}</p> : null}
      <p className="a-scripture" style={{ '--h1': size + 'px', marginTop: reference ? 28 : 0 }}>{children}</p>
    </div>
  );
}
