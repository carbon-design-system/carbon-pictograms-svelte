/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BeijingTowerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class BeijingTower extends SvelteComponentTyped<
  BeijingTowerProps,
  {},
  {}
> {}
