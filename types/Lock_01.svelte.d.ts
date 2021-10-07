/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Lock_01Props
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

export default class Lock_01 extends SvelteComponentTyped<
  Lock_01Props,
  {},
  {}
> {}
