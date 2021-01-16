/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TouchSwipeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TouchSwipe extends SvelteComponentTyped<
  TouchSwipeProps,
  {},
  {}
> {}
