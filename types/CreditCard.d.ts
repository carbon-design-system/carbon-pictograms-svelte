/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CreditCardProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CreditCard extends SvelteComponentTyped<
  CreditCardProps,
  {},
  {}
> {}
