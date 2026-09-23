import React from 'react';

/* Stage name plate. Left 96px, bottom 96px, on a 1920x1080 screen.
   A series may restyle the type but never move it. Slides in from the left over 0.6s. */
export function LowerThird({ name, role, left = 96, bottom = 96, seriesFace = false, className = '', style, ...rest }) {
  return (
    <div className={`lower3 ${className}`.trim()} style={{ left, bottom, ...style }} {...rest}>
      <span className="bar" />
      <div className="txt">
        <p className="name" style={seriesFace ? { fontFamily: "'Archivo',sans-serif", fontStretch: '125%', fontWeight: 900, textTransform: 'uppercase', fontSize: 44, letterSpacing: 0 } : undefined}>{name}</p>
        {role ? <p className="role">{role}</p> : null}
      </div>
    </div>
  );
}
