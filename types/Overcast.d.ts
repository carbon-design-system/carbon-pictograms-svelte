/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface OvercastProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Overcast extends SvelteComponentTyped<
  OvercastProps,
  {},
  {}
> {}
