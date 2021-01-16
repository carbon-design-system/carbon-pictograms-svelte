/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ContinuousSecurityProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ContinuousSecurity extends SvelteComponentTyped<
  ContinuousSecurityProps,
  {},
  {}
> {}
