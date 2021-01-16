/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PatternProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Pattern extends SvelteComponentTyped<
  PatternProps,
  {},
  {}
> {}
