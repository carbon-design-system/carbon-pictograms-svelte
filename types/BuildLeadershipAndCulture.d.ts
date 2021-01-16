/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BuildLeadershipAndCultureProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class BuildLeadershipAndCulture extends SvelteComponentTyped<
  BuildLeadershipAndCultureProps,
  {},
  {}
> {}
