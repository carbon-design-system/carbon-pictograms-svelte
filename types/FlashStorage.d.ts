/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FlashStorageProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class FlashStorage extends SvelteComponentTyped<
  FlashStorageProps,
  {},
  {}
> {}
