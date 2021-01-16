/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ResetHybridCloudProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ResetHybridCloud extends SvelteComponentTyped<
  ResetHybridCloudProps,
  {},
  {}
> {}
