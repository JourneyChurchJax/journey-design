import * as React from 'react';

/**
 * Pill button. Primary is Journey red; ghost is for dark grounds only.
 * @startingPoint section="Actions" subtitle="Pill buttons in all four variants" viewport="700x140"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** "primary" red · "dark" ink · "ghost" hairline on dark · "outline" ink hairline on cream. */
  variant?: 'primary' | 'dark' | 'ghost' | 'outline';
  /** "sm" tightens padding to .6rem/1.05rem and type to .875rem. */
  size?: 'default' | 'sm';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  /** Appends a typographic arrow. There is no icon set. */
  arrow?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
