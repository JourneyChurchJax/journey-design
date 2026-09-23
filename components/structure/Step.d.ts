import * as React from 'react';

/**
 * A numbered step in a sequence. The red numeral carries the whole hierarchy.
 * @startingPoint section="Structure" subtitle="Numbered steps with red numerals" viewport="700x230"
 */
export interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  /** "01", "02" — two digits, zero-padded. */
  number: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Step(props: StepProps): JSX.Element;
