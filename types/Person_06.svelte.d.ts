/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Person_06Props
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

export default class Person_06 extends SvelteComponentTyped<
  Person_06Props,
  {},
  {}
> {}
