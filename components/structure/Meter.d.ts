import * as React from 'react';

/** Campaign progress bar with an uppercase caption row. Used for Arise & Build. */
export interface MeterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0 to 100. */
  pct?: number;
  /** Left caption, e.g. "Raised · $660,000". */
  left?: React.ReactNode;
  /** Right caption, e.g. "Goal · $1,000,000". */
  right?: React.ReactNode;
}
export declare function Meter(props: MeterProps): JSX.Element;
