/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EmergencyExitProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class EmergencyExit extends SvelteComponentTyped<
  EmergencyExitProps,
  {},
  {}
> {}
