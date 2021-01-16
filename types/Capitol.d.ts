/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CapitolProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Capitol extends SvelteComponentTyped<
  CapitolProps,
  {},
  {}
> {}
