/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ShoppingCartProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ShoppingCart extends SvelteComponentTyped<
  ShoppingCartProps,
  {},
  {}
> {}
