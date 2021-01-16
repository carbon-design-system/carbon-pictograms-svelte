/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SecurityAsAServiceProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SecurityAsAService extends SvelteComponentTyped<
  SecurityAsAServiceProps,
  {},
  {}
> {}
