/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NycManhattan_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class NycManhattan_02 extends SvelteComponentTyped<
  NycManhattan_02Props,
  {},
  {}
> {}
