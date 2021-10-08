/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MovementOfGoods_01Props
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

export default class MovementOfGoods_01 extends SvelteComponentTyped<
  MovementOfGoods_01Props,
  {},
  {}
> {}
