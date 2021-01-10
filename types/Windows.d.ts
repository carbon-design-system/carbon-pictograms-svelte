/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WindowsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Windows extends SvelteComponentTyped<
  WindowsProps,
  {},
  {}
> {}
