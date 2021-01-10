/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface OilRigProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class OilRig extends SvelteComponentTyped<OilRigProps, {}, {}> {}
