/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SaasEnablementProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SaasEnablement extends SvelteComponentTyped<
  SaasEnablementProps,
  {},
  {}
> {}
