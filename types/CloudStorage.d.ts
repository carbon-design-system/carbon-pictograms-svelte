/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudStorageProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  /**
   * Set a tabindex value
   */
  tabindex?: string;

  /**
   * Set a custom SVG fill color
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudStorage extends SvelteComponentTyped<
  CloudStorageProps,
  {},
  {}
> {}
