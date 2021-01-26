/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DataPrivacyProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DataPrivacy extends SvelteComponentTyped<
  DataPrivacyProps,
  {},
  {}
> {}
