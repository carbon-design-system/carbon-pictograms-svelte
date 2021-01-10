/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AmsterdamFarmProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AmsterdamFarm extends SvelteComponentTyped<
  AmsterdamFarmProps,
  {},
  {}
> {}
