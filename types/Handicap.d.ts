/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HandicapProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Handicap extends SvelteComponentTyped<
  HandicapProps,
  {},
  {}
> {}
