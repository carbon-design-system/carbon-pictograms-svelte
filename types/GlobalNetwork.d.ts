/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GlobalNetworkProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class GlobalNetwork extends SvelteComponentTyped<
  GlobalNetworkProps,
  {},
  {}
> {}
