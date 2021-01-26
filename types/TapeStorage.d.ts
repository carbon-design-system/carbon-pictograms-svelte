/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TapeStorageProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TapeStorage extends SvelteComponentTyped<
  TapeStorageProps,
  {},
  {}
> {}
