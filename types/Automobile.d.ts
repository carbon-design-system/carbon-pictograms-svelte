/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AutomobileProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Automobile extends SvelteComponentTyped<
  AutomobileProps,
  {},
  {}
> {}
