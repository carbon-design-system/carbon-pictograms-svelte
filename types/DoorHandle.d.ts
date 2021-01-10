/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DoorHandleProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DoorHandle extends SvelteComponentTyped<
  DoorHandleProps,
  {},
  {}
> {}
