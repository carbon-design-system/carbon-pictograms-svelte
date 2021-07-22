/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BuildLeadershipAndCultureProps
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

export default class BuildLeadershipAndCulture extends SvelteComponentTyped<
  BuildLeadershipAndCultureProps,
  {},
  {}
> {}
