/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ExpandHorzProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ExpandHorz extends SvelteComponentTyped<
  ExpandHorzProps,
  {},
  {}
> {}
