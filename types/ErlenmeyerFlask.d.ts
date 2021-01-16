/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ErlenmeyerFlaskProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ErlenmeyerFlask extends SvelteComponentTyped<
  ErlenmeyerFlaskProps,
  {},
  {}
> {}
