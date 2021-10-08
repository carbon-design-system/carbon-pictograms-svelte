/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Feedback_02Props
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

export default class Feedback_02 extends SvelteComponentTyped<
  Feedback_02Props,
  {},
  {}
> {}
