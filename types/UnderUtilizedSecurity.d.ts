/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UnderUtilizedSecurityProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class UnderUtilizedSecurity extends SvelteComponentTyped<
  UnderUtilizedSecurityProps,
  {},
  {}
> {}
