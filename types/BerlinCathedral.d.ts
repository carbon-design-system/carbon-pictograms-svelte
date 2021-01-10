/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BerlinCathedralProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class BerlinCathedral extends SvelteComponentTyped<
  BerlinCathedralProps,
  {},
  {}
> {}
