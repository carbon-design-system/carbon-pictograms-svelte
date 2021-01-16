/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AsiaAustraliaProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AsiaAustralia extends SvelteComponentTyped<
  AsiaAustraliaProps,
  {},
  {}
> {}
