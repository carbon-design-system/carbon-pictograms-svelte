/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeartHealthProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class HeartHealth extends SvelteComponentTyped<
  HeartHealthProps,
  {},
  {}
> {}
