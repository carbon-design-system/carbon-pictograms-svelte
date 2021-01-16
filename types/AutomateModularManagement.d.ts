/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AutomateModularManagementProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AutomateModularManagement extends SvelteComponentTyped<
  AutomateModularManagementProps,
  {},
  {}
> {}
