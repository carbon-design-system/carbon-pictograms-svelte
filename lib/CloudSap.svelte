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
  <path d="M16,30.36H2c-0.199,0-0.36-0.161-0.36-0.36V16h0.72v13.64h13.491L29.13,16.377H19v-0.72h11	c0.146,0,0.277,0.087,0.333,0.222c0.056,0.135,0.024,0.29-0.078,0.393l-14,13.983C16.187,30.322,16.095,30.36,16,30.36z M10,18.36	c-4.61,0-8.36-3.75-8.36-8.36S5.39,1.64,10,1.64s8.36,3.75,8.36,8.36S14.61,18.36,10,18.36z M9.514,17.625	C9.675,17.635,9.837,17.64,10,17.64c2.231,0,4.242-0.961,5.64-2.491V9.294h0.72v4.935c0.808-1.212,1.28-2.666,1.28-4.229	c0-0.804-0.124-1.579-0.355-2.307l-5.075-2.93l0.36-0.624l4.276,2.469c-1.016-2.042-2.919-3.568-5.201-4.07L6.57,5.468L6.21,4.844	l4.277-2.469C10.326,2.365,10.163,2.36,10,2.36c-2.231,0-4.242,0.961-5.64,2.492v5.854H3.64V5.771C2.832,6.983,2.36,8.437,2.36,10	c0,0.804,0.125,1.579,0.356,2.307l5.075,2.93l-0.36,0.624l-4.276-2.469c1.016,2.042,2.919,3.568,5.202,4.07l5.074-2.93l0.36,0.623	L9.514,17.625z"></path>
</svg>