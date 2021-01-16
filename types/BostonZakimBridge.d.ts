/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BostonZakimBridgeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class BostonZakimBridge extends SvelteComponentTyped<
  BostonZakimBridgeProps,
  {},
  {}
> {}
