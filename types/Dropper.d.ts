/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DropperProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Dropper extends SvelteComponentTyped<
  DropperProps,
  {},
  {}
> {}
