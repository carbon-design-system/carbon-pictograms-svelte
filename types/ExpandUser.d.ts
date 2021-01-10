/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ExpandUserProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ExpandUser extends SvelteComponentTyped<
  ExpandUserProps,
  {},
  {}
> {}
