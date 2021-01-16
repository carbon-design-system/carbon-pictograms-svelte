/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PresenterProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Presenter extends SvelteComponentTyped<
  PresenterProps,
  {},
  {}
> {}
