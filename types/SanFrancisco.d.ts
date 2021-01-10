/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SanFranciscoProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SanFrancisco extends SvelteComponentTyped<
  SanFranciscoProps,
  {},
  {}
> {}
