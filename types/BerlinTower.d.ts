/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BerlinTowerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class BerlinTower extends SvelteComponentTyped<
  BerlinTowerProps,
  {},
  {}
> {}
