import * as React from 'react';

/**
 * The Journey Church lockup. Picks the right file for the ground it sits on.
 * @startingPoint section="Graphics" subtitle="All three lockups on every ground" viewport="700x200"
 */
export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** "horizontal" is the default lockup. "stacked" for square formats. "mark" for favicons and when the name is already written. */
  variant?: 'horizontal' | 'stacked' | 'mark' | 'wordmark';
  /** The ground behind it. "photo" and "red" both resolve to the all-white file. */
  on?: 'cream' | 'dark' | 'photo' | 'red' | 'ink';
  /** Rendered width in px. 360 on 1920 art, 280 on 1080 squares, 120 minimum on screen. */
  width?: number;
  /** Directory the PNGs live in, relative to the consuming page. Default "assets/logo". */
  base?: string;
  /** Explicit file path, overriding variant/on. */
  src?: string;
  /** Absolutely position it in an artboard corner, e.g. "bottom-left". */
  corner?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  alt?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;
