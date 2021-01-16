/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SanFranciscoFogProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SanFranciscoFog extends SvelteComponentTyped<
  SanFranciscoFogProps,
  {},
  {}
> {}
