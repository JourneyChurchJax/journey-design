import * as React from 'react';

/**
 * Sticky cream site header with a hairline rule and a text toggle under 900px.
 * @startingPoint section="Navigation" subtitle="Sticky cream header with hairline rule" viewport="700x110"
 */
export interface NavLink { label: string; href: string; current?: boolean }
export interface NavProps extends React.HTMLAttributes<HTMLElement> {
  /** Wordmark text. Ignored when logoSrc is set. */
  brand?: string;
  /** Path to a horizontal logo PNG. Prefer this over retyping the name. */
  logoSrc?: string;
  /** Brand link target. Default "/". */
  href?: string;
  links?: NavLink[];
  /** Optional trailing element, usually a Button. */
  cta?: React.ReactNode;
}
export declare function Nav(props: NavProps): JSX.Element;
