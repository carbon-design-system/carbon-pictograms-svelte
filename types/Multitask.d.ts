/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MultitaskProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Multitask extends SvelteComponentTyped<
  MultitaskProps,
  {},
  {}
> {}
