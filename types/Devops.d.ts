/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DevopsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Devops extends SvelteComponentTyped<DevopsProps, {}, {}> {}
