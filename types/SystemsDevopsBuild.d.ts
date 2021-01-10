/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SystemsDevopsBuildProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SystemsDevopsBuild extends SvelteComponentTyped<
  SystemsDevopsBuildProps,
  {},
  {}
> {}
