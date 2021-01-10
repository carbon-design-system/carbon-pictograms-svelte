/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MedicalStaffProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class MedicalStaff extends SvelteComponentTyped<
  MedicalStaffProps,
  {},
  {}
> {}
