/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Farm_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Farm_02 extends SvelteComponentTyped<
  Farm_02Props,
  {},
  {}
> {}
