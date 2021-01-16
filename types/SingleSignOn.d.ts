/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SingleSignOnProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SingleSignOn extends SvelteComponentTyped<
  SingleSignOnProps,
  {},
  {}
> {}
