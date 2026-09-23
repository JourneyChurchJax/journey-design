import * as React from 'react';

/**
 * Fixed-pixel artboard that scales to fit. The container for every Journey graphic.
 * @startingPoint section="Graphics" subtitle="1080 square artboard, scaled to fit" viewport="1080x1080"
 */
export interface ArtFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Output width in px. 1080 square, 1080 story, 1920 screen. */
  width?: number;
  /** Output height in px. 1080, 1920, or 1080. */
  height?: number;
  /** "cream" (default), "dark" (#0a0a0a), "deep" (#050505). */
  ground?: 'cream' | 'dark' | 'deep';
  /** Padding in output px. 80 on a square, 140 on a 1920 screen. */
  pad?: number;
  /** Photograph URL. Applies the house treatment: saturate .85, contrast 1.05, scrim, no blur. */
  photo?: string;
  /** Scrim direction over the photo. */
  scrim?: 'bottom' | 'top' | 'left' | 'flat';
  /** Paper tooth — 5.5% ink dots. Large cream fields only. */
  tooth?: boolean;
  /** Grain — 4% white dots in overlay. Large dark fields only. */
  grain?: boolean;
  /** Draw the dashed safe-zone overlay. Specs and QA only, never on a shipped graphic. */
  safe?: boolean;
  children?: React.ReactNode;
}
export declare function ArtFrame(props: ArtFrameProps): JSX.Element;
