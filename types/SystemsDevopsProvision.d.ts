/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SystemsDevopsProvisionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SystemsDevopsProvision extends SvelteComponentTyped<
  SystemsDevopsProvisionProps,
  {},
  {}
> {}
