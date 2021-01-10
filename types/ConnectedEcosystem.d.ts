/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ConnectedEcosystemProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ConnectedEcosystem extends SvelteComponentTyped<
  ConnectedEcosystemProps,
  {},
  {}
> {}
