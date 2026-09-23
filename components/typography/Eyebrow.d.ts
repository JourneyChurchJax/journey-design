import * as React from 'react';

/** Uppercase tracked label that names the moment above a headline. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Leading red dot. Used on hero sections and footer column heads. */
  dot?: boolean;
  /** Trailing 4rem red hairline that draws in on reveal. */
  line?: boolean;
  /** "ember" uses the small-red text color on cream; "inherit" leaves the color to the surface. */
  tone?: 'ember' | 'inherit';
  children?: React.ReactNode;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
