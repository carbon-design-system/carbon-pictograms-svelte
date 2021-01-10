/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MicroorganismsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Microorganisms extends SvelteComponentTyped<
  MicroorganismsProps,
  {},
  {}
> {}
