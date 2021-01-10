/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TelemedicineProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Telemedicine extends SvelteComponentTyped<
  TelemedicineProps,
  {},
  {}
> {}
