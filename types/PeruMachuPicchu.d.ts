/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PeruMachuPicchuProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class PeruMachuPicchu extends SvelteComponentTyped<
  PeruMachuPicchuProps,
  {},
  {}
> {}
