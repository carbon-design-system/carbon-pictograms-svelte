/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BudapestProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Budapest extends SvelteComponentTyped<
  BudapestProps,
  {},
  {}
> {}
