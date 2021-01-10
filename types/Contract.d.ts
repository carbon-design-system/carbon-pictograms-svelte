/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ContractProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Contract extends SvelteComponentTyped<
  ContractProps,
  {},
  {}
> {}
