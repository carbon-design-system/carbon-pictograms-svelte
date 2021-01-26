/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HybridCloud_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class HybridCloud_02 extends SvelteComponentTyped<
  HybridCloud_02Props,
  {},
  {}
> {}
