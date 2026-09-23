import * as React from 'react';

/**
 * Site footer on the deepest ink field, with grain and up to four link columns.
 * @startingPoint section="Navigation" subtitle="Deep ink footer with link columns" viewport="700x340"
 */
export interface FooterColumn { title: string; links: { label: string; href: string }[] }
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Leading column: a red-dot eyebrow and one muted sentence. */
  blurb?: { title: string; text: string };
  columns?: FooterColumn[];
  /** The hairline-separated base row. */
  base?: { left: string; right: string };
}
export declare function Footer(props: FooterProps): JSX.Element;
