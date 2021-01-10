/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HybridCloudProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class HybridCloud extends SvelteComponentTyped<
  HybridCloudProps,
  {},
  {}
> {}
