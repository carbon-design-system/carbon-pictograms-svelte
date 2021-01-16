/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CoronavirusProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Coronavirus extends SvelteComponentTyped<
  CoronavirusProps,
  {},
  {}
> {}
