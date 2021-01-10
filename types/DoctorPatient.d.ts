/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DoctorPatientProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DoctorPatient extends SvelteComponentTyped<
  DoctorPatientProps,
  {},
  {}
> {}
