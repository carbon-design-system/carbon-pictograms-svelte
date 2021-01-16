/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SpaceshipProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Spaceship extends SvelteComponentTyped<
  SpaceshipProps,
  {},
  {}
> {}
