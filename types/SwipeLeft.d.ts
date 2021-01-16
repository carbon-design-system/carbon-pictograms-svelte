/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SwipeLeftProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SwipeLeft extends SvelteComponentTyped<
  SwipeLeftProps,
  {},
  {}
> {}
