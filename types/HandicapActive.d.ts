/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HandicapActiveProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class HandicapActive extends SvelteComponentTyped<
  HandicapActiveProps,
  {},
  {}
> {}
