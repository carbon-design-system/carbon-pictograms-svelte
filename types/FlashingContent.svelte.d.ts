/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FlashingContentProps
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

export default class FlashingContent extends SvelteComponentTyped<
  FlashingContentProps,
  {},
  {}
> {}
