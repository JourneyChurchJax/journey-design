import * as React from 'react';

/** Quoted Scripture on an artboard. Newsreader, always, even inside bespoke series art. */
export interface ArtScriptureProps extends React.HTMLAttributes<HTMLDivElement> {
  /** e.g. "Psalm 27:4". Rendered as the red eyebrow. */
  reference?: string;
  /** Verse size in output px. Stage floor is 80. */
  size?: number;
  children?: React.ReactNode;
}
export declare function ArtScripture(props: ArtScriptureProps): JSX.Element;
