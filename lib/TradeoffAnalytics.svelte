<script>
  /**
   * Specify the pictogram title.
   * @type {string}
   */
  export let title = undefined;

  $: labelled =  $$props["aria-label"] || $$props["aria-labelledby"] || $$props["title"];
  $: attributes = {
    "aria-hidden": labelled ? undefined : true,
    role: labelled ? "img" : undefined,
    focusable: Number($$props["tabindex"]) === 0  ? true : undefined,
  };
</script>

<svg
  preserveAspectRatio="xMidYMid meet"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  width="64"
  height="64"
  fill="currentColor"
  {title}
  {...attributes}
  {...$$restProps}>
  <path d="M21,30.36H11v-0.72h4.64V16.36H1v-0.72h30v0.72H16.36v13.28H21V30.36z M25,14.36	c-2.955,0-5.36-2.404-5.36-5.36S22.045,3.64,25,3.64S30.36,6.044,30.36,9S27.955,14.36,25,14.36z M25,4.36	c-2.559,0-4.64,2.082-4.64,4.64s2.081,4.64,4.64,4.64s4.64-2.082,4.64-4.64S27.559,4.36,25,4.36z M12,14.36	c-1.301,0-2.36-1.059-2.36-2.36S10.699,9.64,12,9.64s2.36,1.059,2.36,2.36S13.301,14.36,12,14.36z M12,10.36	c-0.904,0-1.64,0.736-1.64,1.64s0.736,1.64,1.64,1.64s1.64-0.736,1.64-1.64S12.904,10.36,12,10.36z M4,14.36	c-1.301,0-2.36-1.059-2.36-2.36S2.699,9.64,4,9.64S6.36,10.699,6.36,12S5.301,14.36,4,14.36z M4,10.36	c-0.904,0-1.64,0.736-1.64,1.64S3.096,13.64,4,13.64S5.64,12.904,5.64,12S4.904,10.36,4,10.36z M8,8.36	C6.699,8.36,5.64,7.301,5.64,6S6.699,3.64,8,3.64S10.36,4.699,10.36,6S9.301,8.36,8,8.36z M8,4.36C7.096,4.36,6.36,5.096,6.36,6	S7.096,7.64,8,7.64S9.64,6.904,9.64,6S8.904,4.36,8,4.36z"></path>
</svg>