/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Chart_3DProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Chart_3D extends SvelteComponentTyped<
  Chart_3DProps,
  {},
  {}
> {}
