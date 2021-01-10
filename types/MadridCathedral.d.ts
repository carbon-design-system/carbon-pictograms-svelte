/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MadridCathedralProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class MadridCathedral extends SvelteComponentTyped<
  MadridCathedralProps,
  {},
  {}
> {}
