/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BusinessContinuityProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class BusinessContinuity extends SvelteComponentTyped<
  BusinessContinuityProps,
  {},
  {}
> {}
