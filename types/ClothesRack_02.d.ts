/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ClothesRack_02Props
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

export default class ClothesRack_02 extends SvelteComponentTyped<
  ClothesRack_02Props,
  {},
  {}
> {}
