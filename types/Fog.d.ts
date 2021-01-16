/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FogProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Fog extends SvelteComponentTyped<FogProps, {}, {}> {}
