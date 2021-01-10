/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GlobalFinanceNetworkProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class GlobalFinanceNetwork extends SvelteComponentTyped<
  GlobalFinanceNetworkProps,
  {},
  {}
> {}
