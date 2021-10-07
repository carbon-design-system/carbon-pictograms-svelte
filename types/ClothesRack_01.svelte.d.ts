/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ClothesRack_01Props
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

export default class ClothesRack_01 extends SvelteComponentTyped<
  ClothesRack_01Props,
  {},
  {}
> {}
