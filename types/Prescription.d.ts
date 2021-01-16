/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PrescriptionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Prescription extends SvelteComponentTyped<
  PrescriptionProps,
  {},
  {}
> {}
