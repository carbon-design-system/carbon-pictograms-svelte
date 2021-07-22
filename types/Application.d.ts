/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ApplicationProps
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

export default class Application extends SvelteComponentTyped<
  ApplicationProps,
  {},
  {}
> {}
