/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NightClearProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class NightClear extends SvelteComponentTyped<
  NightClearProps,
  {},
  {}
> {}
