/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FilterVariableProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class FilterVariable extends SvelteComponentTyped<
  FilterVariableProps,
  {},
  {}
> {}
