/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UruguayPalacioSalvoProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class UruguayPalacioSalvo extends SvelteComponentTyped<
  UruguayPalacioSalvoProps,
  {},
  {}
> {}
