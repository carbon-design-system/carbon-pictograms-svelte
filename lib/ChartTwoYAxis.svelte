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
  <path d="M19,17.64h8v0.721h-7.851l-6.895,6.895	C12.187,25.322,12.096,25.36,12,25.36H5v-0.72h6.851l6.894-6.895C18.812,17.678,18.904,17.64,19,17.64z M5,14.36h7	c0.096,0,0.187-0.038,0.254-0.105l6.895-6.895H27V6.64h-8c-0.096,0-0.188,0.038-0.255,0.105l-6.894,6.895H5V14.36z M31.255,2.746	L29,0.491l-2.255,2.255l0.51,0.509L28.64,1.87v28.77H3.36V1.869l1.386,1.385l0.509-0.509L3,0.491L0.746,2.746l0.509,0.509	L2.64,1.869V31c0,0.199,0.161,0.36,0.36,0.36h26c0.199,0,0.36-0.161,0.36-0.36V1.87l1.385,1.385L31.255,2.746z"></path>
</svg>