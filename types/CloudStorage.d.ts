/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudStorageProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudStorage extends SvelteComponentTyped<
  CloudStorageProps,
  {},
  {}
> {}
