/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BlockchainProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Blockchain extends SvelteComponentTyped<
  BlockchainProps,
  {},
  {}
> {}
