/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DataStorageProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DataStorage extends SvelteComponentTyped<
  DataStorageProps,
  {},
  {}
> {}
