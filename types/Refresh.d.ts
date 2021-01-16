/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RefreshProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Refresh extends SvelteComponentTyped<
  RefreshProps,
  {},
  {}
> {}
