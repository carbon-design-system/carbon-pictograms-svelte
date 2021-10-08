/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface InspectDataProps
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

export default class InspectData extends SvelteComponentTyped<
  InspectDataProps,
  {},
  {}
> {}
