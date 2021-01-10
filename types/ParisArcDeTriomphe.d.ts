/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ParisArcDeTriompheProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ParisArcDeTriomphe extends SvelteComponentTyped<
  ParisArcDeTriompheProps,
  {},
  {}
> {}
