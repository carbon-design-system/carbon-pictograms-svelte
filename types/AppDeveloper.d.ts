/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AppDeveloperProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AppDeveloper extends SvelteComponentTyped<
  AppDeveloperProps,
  {},
  {}
> {}
