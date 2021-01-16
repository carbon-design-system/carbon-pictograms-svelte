/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudPakForMulticloudManagementProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudPakForMulticloudManagement extends SvelteComponentTyped<
  CloudPakForMulticloudManagementProps,
  {},
  {}
> {}
