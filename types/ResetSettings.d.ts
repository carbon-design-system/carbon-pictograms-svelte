/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ResetSettingsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ResetSettings extends SvelteComponentTyped<
  ResetSettingsProps,
  {},
  {}
> {}
