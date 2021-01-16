/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SystemsDevopsDeployProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SystemsDevopsDeploy extends SvelteComponentTyped<
  SystemsDevopsDeployProps,
  {},
  {}
> {}
