/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ElectricProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Electric extends SvelteComponentTyped<
  ElectricProps,
  {},
  {}
> {}
