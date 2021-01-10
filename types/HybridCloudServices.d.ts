/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HybridCloudServicesProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class HybridCloudServices extends SvelteComponentTyped<
  HybridCloudServicesProps,
  {},
  {}
> {}
