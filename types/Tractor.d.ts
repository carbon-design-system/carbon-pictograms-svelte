/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TractorProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Tractor extends SvelteComponentTyped<
  TractorProps,
  {},
  {}
> {}
