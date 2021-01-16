/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PragueCharlesBridgeTowerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class PragueCharlesBridgeTower extends SvelteComponentTyped<
  PragueCharlesBridgeTowerProps,
  {},
  {}
> {}
