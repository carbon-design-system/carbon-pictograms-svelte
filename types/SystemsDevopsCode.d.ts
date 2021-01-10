/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SystemsDevopsCodeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SystemsDevopsCode extends SvelteComponentTyped<
  SystemsDevopsCodeProps,
  {},
  {}
> {}
