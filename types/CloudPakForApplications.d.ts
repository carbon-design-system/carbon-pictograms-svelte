/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudPakForApplicationsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudPakForApplications extends SvelteComponentTyped<
  CloudPakForApplicationsProps,
  {},
  {}
> {}
