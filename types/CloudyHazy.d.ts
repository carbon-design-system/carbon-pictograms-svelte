/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudyHazyProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudyHazy extends SvelteComponentTyped<
  CloudyHazyProps,
  {},
  {}
> {}
