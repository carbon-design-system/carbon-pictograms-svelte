/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WatsonLogoProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class WatsonLogo extends SvelteComponentTyped<
  WatsonLogoProps,
  {},
  {}
> {}
