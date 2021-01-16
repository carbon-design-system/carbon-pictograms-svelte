/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FreeTrialProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class FreeTrial extends SvelteComponentTyped<
  FreeTrialProps,
  {},
  {}
> {}
