/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface KeepDryProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class KeepDry extends SvelteComponentTyped<
  KeepDryProps,
  {},
  {}
> {}
