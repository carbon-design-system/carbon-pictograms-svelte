/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudSapProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudSap extends SvelteComponentTyped<
  CloudSapProps,
  {},
  {}
> {}
