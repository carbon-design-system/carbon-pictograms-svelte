/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BarcelonaProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Barcelona extends SvelteComponentTyped<
  BarcelonaProps,
  {},
  {}
> {}
