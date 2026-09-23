import * as React from 'react';

/**
 * Quoted Scripture set in Newsreader, with its reference as a red eyebrow above.
 * @startingPoint section="Typography" subtitle="Scripture in Newsreader with red reference" viewport="700x260"
 */
export interface ScriptureProps extends React.HTMLAttributes<HTMLDivElement> {
  /** e.g. "Ephesians 2:22". Rendered as the uppercase red reference line. */
  reference?: string;
  /** The verse. Wrap the beat in <em> — italic marks it, not red. */
  children?: React.ReactNode;
}
export declare function Scripture(props: ScriptureProps): JSX.Element;
