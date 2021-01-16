/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StreamlineProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Streamline extends SvelteComponentTyped<
  StreamlineProps,
  {},
  {}
> {}
