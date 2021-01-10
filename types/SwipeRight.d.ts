/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SwipeRightProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SwipeRight extends SvelteComponentTyped<
  SwipeRightProps,
  {},
  {}
> {}
