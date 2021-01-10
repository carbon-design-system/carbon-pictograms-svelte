/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EuropeAfricaProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class EuropeAfrica extends SvelteComponentTyped<
  EuropeAfricaProps,
  {},
  {}
> {}
