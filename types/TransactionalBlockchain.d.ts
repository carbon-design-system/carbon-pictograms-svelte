/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TransactionalBlockchainProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TransactionalBlockchain extends SvelteComponentTyped<
  TransactionalBlockchainProps,
  {},
  {}
> {}
