/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AdvancedThreatsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AdvancedThreats extends SvelteComponentTyped<
  AdvancedThreatsProps,
  {},
  {}
> {}
