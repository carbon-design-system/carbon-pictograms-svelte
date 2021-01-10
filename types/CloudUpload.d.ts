/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudUploadProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudUpload extends SvelteComponentTyped<
  CloudUploadProps,
  {},
  {}
> {}
