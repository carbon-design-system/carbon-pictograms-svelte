/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TreeMapProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TreeMap extends SvelteComponentTyped<
  TreeMapProps,
  {},
  {}
> {}
