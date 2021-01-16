/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ApplicationSecurityProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ApplicationSecurity extends SvelteComponentTyped<
  ApplicationSecurityProps,
  {},
  {}
> {}
