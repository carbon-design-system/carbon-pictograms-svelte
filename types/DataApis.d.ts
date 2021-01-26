/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DataApisProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DataApis extends SvelteComponentTyped<
  DataApisProps,
  {},
  {}
> {}
