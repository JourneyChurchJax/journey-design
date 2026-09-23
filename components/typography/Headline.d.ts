import * as React from 'react';

/**
 * The church's voice. Inter Tight 800 with exactly one italic red accent word.
 * @startingPoint section="Typography" subtitle="Display headline with one italic red beat" viewport="700x220"
 */
export interface HeadlineProps extends React.HTMLAttributes<HTMLElement> {
  /** Heading element to render. Default "h2". */
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div';
  /** Scale step. Default "display". */
  size?: 'hero' | 'display' | 'h2' | 'h3';
  /** The single italic red word. The emotional beat — never "the", "and", or "of". */
  accent?: React.ReactNode;
  /** Punctuation after the accent word. Journey headlines end in a period; pass "" to drop it. */
  trailing?: string;
  children?: React.ReactNode;
}
export declare function Headline(props: HeadlineProps): JSX.Element;
