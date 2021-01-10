/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HomeGarageProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class HomeGarage extends SvelteComponentTyped<
  HomeGarageProps,
  {},
  {}
> {}
