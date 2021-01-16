/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TouchIdProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TouchId extends SvelteComponentTyped<
  TouchIdProps,
  {},
  {}
> {}
