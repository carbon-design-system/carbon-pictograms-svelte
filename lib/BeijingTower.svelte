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
  <path d="M31.35,30.913l-6-24c-0.022-0.087-0.075-0.163-0.15-0.212l-9-6c-0.009-0.006-0.02-0.007-0.029-0.012	c-0.023-0.013-0.046-0.021-0.072-0.029c-0.023-0.007-0.045-0.012-0.069-0.014C16.019,0.645,16.01,0.64,16,0.64	c-0.016,0-0.029,0.007-0.045,0.009c-0.014,0.002-0.029-0.002-0.043,0.002l-8,2C7.784,2.683,7.683,2.784,7.651,2.913l-7,28	c-0.027,0.107-0.003,0.221,0.065,0.309C0.785,31.309,0.889,31.36,1,31.36h30c0.111,0,0.216-0.052,0.284-0.139	C31.352,31.134,31.376,31.021,31.35,30.913z M17.501,11.36l3.071,12.28h-9.11l3.07-12.28H17.501z M18.244,11.36h3.507l4.788,19.28	H7.462l4.851-19.28h1.476l-3.25,13h10.954L18.244,11.36z M8.297,3.297l7.343-1.836v9.179h-3.889l-5.032,20H1.461L8.297,3.297z M27.282,30.64l-4.968-20H16.36V1.673l8.325,5.55l5.854,23.417H27.282z"></path>
</svg>