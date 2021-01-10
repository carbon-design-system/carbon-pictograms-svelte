/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ShopProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Shop extends SvelteComponentTyped<ShopProps, {}, {}> {}
