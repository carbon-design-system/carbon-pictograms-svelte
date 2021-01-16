/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChipDebitProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChipDebit extends SvelteComponentTyped<
  ChipDebitProps,
  {},
  {}
> {}
