/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MinimizeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Minimize extends SvelteComponentTyped<
  MinimizeProps,
  {},
  {}
> {}
