/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface JusticeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Justice extends SvelteComponentTyped<
  JusticeProps,
  {},
  {}
> {}
