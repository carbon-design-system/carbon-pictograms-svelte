/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BeijingMunicipalProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class BeijingMunicipal extends SvelteComponentTyped<
  BeijingMunicipalProps,
  {},
  {}
> {}
