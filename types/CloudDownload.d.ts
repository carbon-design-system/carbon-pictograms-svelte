/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudDownloadProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudDownload extends SvelteComponentTyped<
  CloudDownloadProps,
  {},
  {}
> {}
