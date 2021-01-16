/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WashingtonDcMonumentProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class WashingtonDcMonument extends SvelteComponentTyped<
  WashingtonDcMonumentProps,
  {},
  {}
> {}
