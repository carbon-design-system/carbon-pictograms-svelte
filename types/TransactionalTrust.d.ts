/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TransactionalTrustProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TransactionalTrust extends SvelteComponentTyped<
  TransactionalTrustProps,
  {},
  {}
> {}
