/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CameraProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Camera extends SvelteComponentTyped<CameraProps, {}, {}> {}
