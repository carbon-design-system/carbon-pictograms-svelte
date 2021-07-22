/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WreckingBallProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  /**
   * Set a tabindex value
   */
  tabindex?: string;

  /**
   * Set a custom SVG fill color
   * @default "currentColor"
   */
  fill?: string;
}

export default class WreckingBall extends SvelteComponentTyped<
  WreckingBallProps,
  {},
  {}
> {}
