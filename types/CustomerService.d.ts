/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CustomerServiceProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CustomerService extends SvelteComponentTyped<
  CustomerServiceProps,
  {},
  {}
> {}
