/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VancouverProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Vancouver extends SvelteComponentTyped<
  VancouverProps,
  {},
  {}
> {}
