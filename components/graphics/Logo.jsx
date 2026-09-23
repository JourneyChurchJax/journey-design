import React from 'react';

/* The lockup. Never retyped, never recolored, never ghosted, never cropped.
   On a graphic it sits in the same corner at the same size every time:
   bottom-right 360px on 1920 art, bottom-left 280px on 1080 squares. */
const FILES = {
  horizontal: { cream: 'horizontal-ember_ink.png', dark: 'horizontal-ember_cream.png', photo: 'horizontal-white.png', red: 'horizontal-white.png', ink: 'horizontal-ink.png' },
  stacked:    { cream: 'stacked-ember_ink.png',    dark: 'stacked-ember_cream.png',    photo: 'stacked-white.png',    red: 'stacked-white.png',    ink: 'stacked-ink.png' },
  mark:       { cream: 'mark-ink.png',             dark: 'mark-ember.png',             photo: 'mark-white.png',       red: 'mark-white.png',       ink: 'mark-ink.png' },
  wordmark:   { cream: 'wordmark-ink.png',         dark: 'wordmark-cream.png',         photo: 'wordmark-cream.png',   red: 'wordmark-cream.png',   ink: 'wordmark-ink.png' },
};

export function Logo({ variant = 'horizontal', on = 'cream', width = 260, base = 'assets/logo', src, corner, alt = 'Journey Church', className = '', style, ...rest }) {
  const file = src || `${base}/${(FILES[variant] || FILES.horizontal)[on] || FILES.horizontal.cream}`;
  const pos = corner ? {
    position: 'absolute', zIndex: 4,
    [corner.includes('left') ? 'left' : 'right']: corner.gap ?? 80,
    [corner.includes('top') ? 'top' : 'bottom']: corner.gap ?? 80,
  } : null;
  return <img className={`a-logo ${variant === 'mark' ? 'mk' : ''} ${className}`.replace(/\s+/g, ' ').trim()} src={file} alt={alt} style={{ width, ...pos, ...style }} {...rest} />;
}
