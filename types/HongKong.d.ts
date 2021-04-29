/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HongKongProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class HongKong extends SvelteComponentTyped<
  HongKongProps,
  {},
  {}
> {}
