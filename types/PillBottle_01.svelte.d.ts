/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PillBottle_01Props
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

export default class PillBottle_01 extends SvelteComponentTyped<
  PillBottle_01Props,
  {},
  {}
> {}
