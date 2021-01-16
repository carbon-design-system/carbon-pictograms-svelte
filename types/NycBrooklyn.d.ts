/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NycBrooklynProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class NycBrooklyn extends SvelteComponentTyped<
  NycBrooklynProps,
  {},
  {}
> {}
