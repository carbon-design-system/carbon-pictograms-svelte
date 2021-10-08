/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Person_05Props
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

export default class Person_05 extends SvelteComponentTyped<
  Person_05Props,
  {},
  {}
> {}
