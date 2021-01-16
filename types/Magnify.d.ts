/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MagnifyProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Magnify extends SvelteComponentTyped<
  MagnifyProps,
  {},
  {}
> {}
