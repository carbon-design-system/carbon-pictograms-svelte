/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SingaporeProps
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

export default class Singapore extends SvelteComponentTyped<
  SingaporeProps,
  {},
  {}
> {}
