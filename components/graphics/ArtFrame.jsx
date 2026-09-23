import React from 'react';

/* A fixed-pixel artboard that scales to fit whatever width it is given.
   Everything inside is authored at real output pixels — 1080 square, 1080x1920 story,
   1920x1080 screen — so the type floors in the brand guide stay honest. */
export function ArtFrame({
  width = 1080, height = 1080, ground = 'cream', pad, photo, scrim = 'bottom',
  tooth = false, grain = false, safe = false, children, className = '', style, ...rest
}) {
  const frame = React.useRef(null);
  const board = React.useRef(null);
  React.useEffect(() => {
    const fit = () => {
      if (!frame.current || !board.current) return;
      board.current.style.transform = 'scale(' + (frame.current.clientWidth / width) + ')';
    };
    fit();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(fit) : null;
    if (ro && frame.current) ro.observe(frame.current);
    window.addEventListener('resize', fit);
    return () => { if (ro) ro.disconnect(); window.removeEventListener('resize', fit); };
  }, [width]);

  const groundCls = ground === 'dark' ? 'dark' : ground === 'deep' ? 'deep' : '';
  const scrimCls = scrim === 'top' ? 'scrim-top' : scrim === 'left' ? 'scrim-left' : scrim === 'flat' ? 'scrim-flat' : '';
  const safePx = width === height ? 80 : (height > width ? 250 : 96);

  return (
    <div ref={frame} className={`fr ${className}`.trim()} style={{ '--w': width, '--h': height, ...style }} {...rest}>
      <div
        ref={board}
        className={`art ${pad ? 'pad' : ''} ${groundCls} ${tooth ? 'tooth' : ''} ${grain ? 'grain' : ''} ${photo ? 'on-photo' : ''}`.replace(/\s+/g, ' ').trim()}
        style={{ '--pad': pad ? pad + 'px' : undefined, color: photo ? 'var(--ink-50)' : undefined }}
      >
        {photo ? <div className={`photo ${scrimCls}`.trim()}><span style={{ backgroundImage: `url('${photo}')` }} /></div> : null}
        {children}
        {safe ? <><span className="safe" style={{ '--safe': safePx + 'px' }} /><span className="safe-lbl" style={{ '--safe': safePx + 'px' }}>Safe {safePx}</span></> : null}
      </div>
    </div>
  );
}
