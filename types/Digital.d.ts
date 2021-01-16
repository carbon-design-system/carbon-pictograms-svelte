/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DigitalProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Digital extends SvelteComponentTyped<
  DigitalProps,
  {},
  {}
> {}
