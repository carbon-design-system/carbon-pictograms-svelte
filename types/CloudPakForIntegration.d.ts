/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudPakForIntegrationProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudPakForIntegration extends SvelteComponentTyped<
  CloudPakForIntegrationProps,
  {},
  {}
> {}
