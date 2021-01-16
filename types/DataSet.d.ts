/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DataSetProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DataSet extends SvelteComponentTyped<
  DataSetProps,
  {},
  {}
> {}
