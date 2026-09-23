import * as React from 'react';

/** The logistics block on an artboard. The thing that makes it an event graphic and not a mood board. */
export interface LogisticsProps extends React.HTMLAttributes<HTMLDListElement> {
  /** Two or three cells. Never four — if it needs four, it needs a web page. */
  items?: { label: string; value: React.ReactNode }[];
  /** Gap in output px. Default 36. */
  gap?: number;
}
export declare function Logistics(props: LogisticsProps): JSX.Element;
