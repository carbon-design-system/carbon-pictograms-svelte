/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Farmer_01Props
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

export default class Farmer_01 extends SvelteComponentTyped<
  Farmer_01Props,
  {},
  {}
> {}
