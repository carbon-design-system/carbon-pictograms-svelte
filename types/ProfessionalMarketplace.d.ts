/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ProfessionalMarketplaceProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ProfessionalMarketplace extends SvelteComponentTyped<
  ProfessionalMarketplaceProps,
  {},
  {}
> {}
