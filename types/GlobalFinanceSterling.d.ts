/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GlobalFinanceSterlingProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class GlobalFinanceSterling extends SvelteComponentTyped<
  GlobalFinanceSterlingProps,
  {},
  {}
> {}
