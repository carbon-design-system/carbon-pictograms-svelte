/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Warning_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Warning_01 extends SvelteComponentTyped<
  Warning_01Props,
  {},
  {}
> {}
