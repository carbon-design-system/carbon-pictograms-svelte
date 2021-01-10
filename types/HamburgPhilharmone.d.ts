/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HamburgPhilharmoneProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class HamburgPhilharmone extends SvelteComponentTyped<
  HamburgPhilharmoneProps,
  {},
  {}
> {}
