/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudPartnersProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudPartners extends SvelteComponentTyped<
  CloudPartnersProps,
  {},
  {}
> {}
