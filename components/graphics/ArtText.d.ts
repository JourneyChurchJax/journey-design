import * as React from 'react';

/** Eyebrow plus headline set at artboard pixel scale. */
export interface ArtTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Names the moment. Floor 26px. */
  eyebrow?: React.ReactNode;
  /** The single italic red beat word. */
  accent?: React.ReactNode;
  /** Headline size in output px. Floor 86 on a square. */
  size?: number;
  /** Eyebrow size in output px. Floor 26. */
  eyebrowSize?: number;
  /** Set the headline in the series face (Archivo Expanded Black) instead of Inter Tight. Big events and series only. */
  series?: boolean;
  children?: React.ReactNode;
}
export declare function ArtText(props: ArtTextProps): JSX.Element;
