/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SocialWork_02Props
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

export default class SocialWork_02 extends SvelteComponentTyped<
  SocialWork_02Props,
  {},
  {}
> {}
