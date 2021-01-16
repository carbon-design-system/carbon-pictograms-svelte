/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FaucetProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Faucet extends SvelteComponentTyped<FaucetProps, {}, {}> {}
