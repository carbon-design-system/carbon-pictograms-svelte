/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BlenderProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Blender extends SvelteComponentTyped<
  BlenderProps,
  {},
  {}
> {}
