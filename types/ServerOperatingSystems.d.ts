/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ServerOperatingSystemsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ServerOperatingSystems extends SvelteComponentTyped<
  ServerOperatingSystemsProps,
  {},
  {}
> {}
