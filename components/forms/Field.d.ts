import * as React from 'react';

/** Labelled form field. Underline on dark grounds, boxed with square corners on cream. */
export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Uppercase tracked label above the control. */
  label?: string;
  /** "underline" for dark grounds (default), "box" for cream. */
  style?: 'underline' | 'box';
  /** Control element. Default "input". */
  as?: 'input' | 'textarea' | 'select';
}
export declare function Field(props: FieldProps): JSX.Element;
