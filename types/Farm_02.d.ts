/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Farm_02Props
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

export default class Farm_02 extends SvelteComponentTyped<
  Farm_02Props,
  {},
  {}
> {}
