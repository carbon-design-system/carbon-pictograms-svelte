/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Person_03Props
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

export default class Person_03 extends SvelteComponentTyped<
  Person_03Props,
  {},
  {}
> {}
