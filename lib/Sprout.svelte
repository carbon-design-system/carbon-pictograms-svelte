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
  <path d="M25.666,29.135C25.587,28.939,23.639,24.36,16,24.36c-7.638,0-9.587,4.579-9.666,4.774l-0.668-0.269	c0.084-0.21,2.123-5.078,9.975-5.223V16.36H13c-4.127,0-7.36-3.233-7.36-7.36V6c0-0.199,0.161-0.36,0.36-0.36h3	c2.965,0,5.468,1.668,6.643,4.138C15.756,5.757,18.947,2.64,23,2.64h3c0.199,0,0.36,0.161,0.36,0.36v3c0,4.127-3.233,7.36-7.36,7.36	h-2.64v10.284c7.852,0.145,9.89,5.013,9.974,5.223L25.666,29.135z M6.36,6.36V9c0,3.723,2.917,6.64,6.64,6.64h2.131l-5.385-5.386	l0.509-0.509l5.386,5.385V13c0-3.723-2.917-6.64-6.64-6.64H6.36z M16.869,12.64H19c3.724,0,6.64-2.917,6.64-6.64V3.36H23	c-3.724,0-6.64,2.917-6.64,6.64v2.131l5.385-5.385l0.51,0.509L16.869,12.64z"></path>
</svg>