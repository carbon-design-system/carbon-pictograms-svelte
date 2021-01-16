/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ParisNotreDameProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ParisNotreDame extends SvelteComponentTyped<
  ParisNotreDameProps,
  {},
  {}
> {}
