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
  <path d="M23,29.36H9v-0.72h6.64v-4.28H3	c-1.301,0-2.36-1.059-2.36-2.36V5c0-1.301,1.059-2.36,2.36-2.36h26c1.302,0,2.36,1.059,2.36,2.36v17c0,1.302-1.059,2.36-2.36,2.36	H16.36v4.279H23V29.36z M1.36,19.36V22c0,0.904,0.736,1.64,1.64,1.64h26c0.904,0,1.64-0.735,1.64-1.64v-2.64H1.36z M1.36,18.64	h29.28V5c0-0.904-0.735-1.64-1.64-1.64H3C2.096,3.36,1.36,4.096,1.36,5V18.64z M28,17.36c-0.75,0-1.36-0.61-1.36-1.36	c0-0.058,0.004-0.116,0.011-0.172L5.072,6.836C4.823,7.155,4.435,7.36,4,7.36C3.25,7.36,2.64,6.75,2.64,6S3.25,4.64,4,4.64	S5.36,5.25,5.36,6c0,0.058-0.003,0.116-0.011,0.172l21.58,8.992c0.249-0.318,0.637-0.523,1.071-0.523c0.75,0,1.36,0.61,1.36,1.36	S28.75,17.36,28,17.36z M28,15.36c-0.353,0-0.64,0.287-0.64,0.64s0.287,0.64,0.64,0.64s0.64-0.287,0.64-0.64S28.353,15.36,28,15.36z M4,5.36C3.647,5.36,3.36,5.647,3.36,6S3.647,6.64,4,6.64S4.64,6.353,4.64,6S4.353,5.36,4,5.36z"></path>
</svg>