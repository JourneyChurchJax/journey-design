import * as React from 'react';

/**
 * When, where, what it costs. The block that makes a page useful.
 * @startingPoint section="Structure" subtitle="When / where / cost logistics list" viewport="700x200"
 */
export interface Fact { label: string; value: React.ReactNode }
export interface FactsProps extends React.HTMLAttributes<HTMLDListElement> {
  /** Two or three facts. Never four. */
  items?: Fact[];
  /** Lay the facts out in N columns instead of stacking. */
  columns?: number;
}
export declare function Facts(props: FactsProps): JSX.Element;
