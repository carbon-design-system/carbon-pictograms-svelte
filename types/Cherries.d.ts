/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CherriesProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Cherries extends SvelteComponentTyped<
  CherriesProps,
  {},
  {}
> {}
