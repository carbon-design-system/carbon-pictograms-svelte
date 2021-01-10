/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TShirtProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TShirt extends SvelteComponentTyped<TShirtProps, {}, {}> {}
