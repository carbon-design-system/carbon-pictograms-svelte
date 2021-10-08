/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Yoga_04Props
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

export default class Yoga_04 extends SvelteComponentTyped<
  Yoga_04Props,
  {},
  {}
> {}
