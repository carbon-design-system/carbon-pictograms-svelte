/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WirelessHomeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class WirelessHome extends SvelteComponentTyped<
  WirelessHomeProps,
  {},
  {}
> {}
