/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudBuilderProfessionalServicesProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudBuilderProfessionalServices extends SvelteComponentTyped<
  CloudBuilderProfessionalServicesProps,
  {},
  {}
> {}
