/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BangaloreProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Bangalore extends SvelteComponentTyped<
  BangaloreProps,
  {},
  {}
> {}
