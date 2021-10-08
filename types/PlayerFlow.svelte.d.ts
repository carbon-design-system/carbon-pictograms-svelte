/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PlayerFlowProps
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

export default class PlayerFlow extends SvelteComponentTyped<
  PlayerFlowProps,
  {},
  {}
> {}
