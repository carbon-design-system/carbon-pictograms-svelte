/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TaipeiBubbleTeaProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TaipeiBubbleTea extends SvelteComponentTyped<
  TaipeiBubbleTeaProps,
  {},
  {}
> {}
