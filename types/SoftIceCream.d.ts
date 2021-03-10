/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SoftIceCreamProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SoftIceCream extends SvelteComponentTyped<
  SoftIceCreamProps,
  {},
  {}
> {}