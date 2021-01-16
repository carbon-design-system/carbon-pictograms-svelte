/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NycManhattan_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class NycManhattan_01 extends SvelteComponentTyped<
  NycManhattan_01Props,
  {},
  {}
> {}
