/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Warning_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Warning_02 extends SvelteComponentTyped<
  Warning_02Props,
  {},
  {}
> {}
