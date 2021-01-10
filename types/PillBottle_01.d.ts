/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PillBottle_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class PillBottle_01 extends SvelteComponentTyped<
  PillBottle_01Props,
  {},
  {}
> {}
