import React from 'react';

/* Campaign progress. Fills from zero on mount over 1.6s on the house curve. */
export function Meter({ pct = 0, left, right, className = '', ...rest }) {
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setW(pct); return; }
    const t = setTimeout(() => setW(pct), 60);
    return () => clearTimeout(t);
  }, [pct]);
  return (
    <div className={className} {...rest}>
      <div className="meter"><span style={{ width: `${Math.max(0, Math.min(100, w))}%` }} /></div>
      {(left || right) ? <div className="meter-row"><span>{left}</span><span>{right}</span></div> : null}
    </div>
  );
}
