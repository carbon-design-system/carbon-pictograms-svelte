/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TelemedicineMobileProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TelemedicineMobile extends SvelteComponentTyped<
  TelemedicineMobileProps,
  {},
  {}
> {}
