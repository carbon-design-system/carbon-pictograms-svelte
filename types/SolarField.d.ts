/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SolarFieldProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SolarField extends SvelteComponentTyped<
  SolarFieldProps,
  {},
  {}
> {}
