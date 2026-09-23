import * as React from 'react';

/** Stage lower third. The red bar and the position stay house; a series may restyle the type. */
export interface LowerThirdProps extends React.HTMLAttributes<HTMLDivElement> {
  name: React.ReactNode;
  /** e.g. "Lead Pastor". 22px uppercase in #9a948a. */
  role?: React.ReactNode;
  /** Distance from the left edge in output px. Default 96 — do not move it without a reason. */
  left?: number;
  /** Distance from the bottom edge in output px. Default 96. */
  bottom?: number;
  /** Set the name in the current series face instead of Inter Tight. */
  seriesFace?: boolean;
}
export declare function LowerThird(props: LowerThirdProps): JSX.Element;
