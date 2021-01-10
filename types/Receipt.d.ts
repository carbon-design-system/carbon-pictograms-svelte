/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ReceiptProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Receipt extends SvelteComponentTyped<
  ReceiptProps,
  {},
  {}
> {}
