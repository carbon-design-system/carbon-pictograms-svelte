/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MilanSkyscrapersProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class MilanSkyscrapers extends SvelteComponentTyped<
  MilanSkyscrapersProps,
  {},
  {}
> {}
