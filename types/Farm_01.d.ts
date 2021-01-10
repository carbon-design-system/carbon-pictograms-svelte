/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Farm_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Farm_01 extends SvelteComponentTyped<
  Farm_01Props,
  {},
  {}
> {}
