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
  <path d="M29,26.36H3c-1.301,0-2.36-1.059-2.36-2.36V8c0-1.301,1.059-2.36,2.36-2.36h26	c1.302,0,2.36,1.059,2.36,2.36v16C31.36,25.302,30.302,26.36,29,26.36z M1.36,13.36V24c0,0.904,0.736,1.64,1.64,1.64h26	c0.904,0,1.64-0.735,1.64-1.64V13.36H1.36z M1.36,12.64h29.28v-2.28H1.36V12.64z M1.36,9.64h29.28V8c0-0.904-0.735-1.64-1.64-1.64H3	C2.096,6.36,1.36,7.096,1.36,8V9.64z"></path>
</svg>