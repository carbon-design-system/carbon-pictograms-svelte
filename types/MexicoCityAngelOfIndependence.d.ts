/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MexicoCityAngelOfIndependenceProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class MexicoCityAngelOfIndependence extends SvelteComponentTyped<
  MexicoCityAngelOfIndependenceProps,
  {},
  {}
> {}
