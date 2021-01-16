/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ProtectCriticalAssetsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ProtectCriticalAssets extends SvelteComponentTyped<
  ProtectCriticalAssetsProps,
  {},
  {}
> {}
