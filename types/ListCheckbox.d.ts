/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ListCheckboxProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ListCheckbox extends SvelteComponentTyped<
  ListCheckboxProps,
  {},
  {}
> {}
