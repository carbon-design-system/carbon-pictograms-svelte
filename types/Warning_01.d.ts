/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Warning_01Props
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

export default class Warning_01 extends SvelteComponentTyped<
  Warning_01Props,
  {},
  {}
> {}
