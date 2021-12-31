/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HomeGarageProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  /**
   * Set a tabindex value
   */
  tabindex?: string;

  /**
   * Set a custom SVG fill color
   * @default "currentColor"
   */
  fill?: string;
}

export default class HomeGarage extends SvelteComponentTyped<
  HomeGarageProps,
  {},
  {}
> {}