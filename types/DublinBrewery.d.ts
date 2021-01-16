/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DublinBreweryProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DublinBrewery extends SvelteComponentTyped<
  DublinBreweryProps,
  {},
  {}
> {}
