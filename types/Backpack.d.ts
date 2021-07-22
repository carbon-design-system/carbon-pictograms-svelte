/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BackpackProps
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

export default class Backpack extends SvelteComponentTyped<
  BackpackProps,
  {},
  {}
> {}
