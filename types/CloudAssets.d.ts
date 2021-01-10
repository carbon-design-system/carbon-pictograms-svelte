/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudAssetsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudAssets extends SvelteComponentTyped<
  CloudAssetsProps,
  {},
  {}
> {}
