/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ArgentinaObeliskProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ArgentinaObelisk extends SvelteComponentTyped<
  ArgentinaObeliskProps,
  {},
  {}
> {}
