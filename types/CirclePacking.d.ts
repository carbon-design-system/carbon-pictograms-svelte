/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CirclePackingProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CirclePacking extends SvelteComponentTyped<
  CirclePackingProps,
  {},
  {}
> {}
