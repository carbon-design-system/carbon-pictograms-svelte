/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MedicalProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Medical extends SvelteComponentTyped<
  MedicalProps,
  {},
  {}
> {}
