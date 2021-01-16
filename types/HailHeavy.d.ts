/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HailHeavyProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class HailHeavy extends SvelteComponentTyped<
  HailHeavyProps,
  {},
  {}
> {}
