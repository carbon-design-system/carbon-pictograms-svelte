/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface InvoiceProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Invoice extends SvelteComponentTyped<
  InvoiceProps,
  {},
  {}
> {}
