/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TouchGestureProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TouchGesture extends SvelteComponentTyped<
  TouchGestureProps,
  {},
  {}
> {}
