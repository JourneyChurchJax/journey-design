import * as React from 'react';

/**
 * Accordion row for FAQs. Hairline rule and a red chevron; no card, no shadow.
 * @startingPoint section="Structure" subtitle="FAQ accordion on hairlines" viewport="700x260"
 */
export interface DiscloseProps extends React.HTMLAttributes<HTMLDetailsElement> {
  /** The question. Inter Tight 600. */
  summary: React.ReactNode;
  defaultOpen?: boolean;
  children?: React.ReactNode;
}
export declare function Disclose(props: DiscloseProps): JSX.Element;
