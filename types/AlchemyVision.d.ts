/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AlchemyVisionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AlchemyVision extends SvelteComponentTyped<
  AlchemyVisionProps,
  {},
  {}
> {}
