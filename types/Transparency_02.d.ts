/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Transparency_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Transparency_02 extends SvelteComponentTyped<
  Transparency_02Props,
  {},
  {}
> {}
