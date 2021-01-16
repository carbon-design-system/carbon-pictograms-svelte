/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TorontoProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Toronto extends SvelteComponentTyped<
  TorontoProps,
  {},
  {}
> {}
