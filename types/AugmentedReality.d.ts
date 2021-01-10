/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AugmentedRealityProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AugmentedReality extends SvelteComponentTyped<
  AugmentedRealityProps,
  {},
  {}
> {}
