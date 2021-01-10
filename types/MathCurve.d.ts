/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MathCurveProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class MathCurve extends SvelteComponentTyped<
  MathCurveProps,
  {},
  {}
> {}
