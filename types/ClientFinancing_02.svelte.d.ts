/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ClientFinancing_02Props
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

export default class ClientFinancing_02 extends SvelteComponentTyped<
  ClientFinancing_02Props,
  {},
  {}
> {}
