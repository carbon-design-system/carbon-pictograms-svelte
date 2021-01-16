/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudEcosystemProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudEcosystem extends SvelteComponentTyped<
  CloudEcosystemProps,
  {},
  {}
> {}
