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
  <path d="M23,31.36h-3c-0.199,0-0.36-0.161-0.36-0.36V1c0-0.199,0.161-0.36,0.36-0.36h2c1.853,0,3.36,1.507,3.36,3.36	v12c0,0.199-0.161,0.36-0.36,0.36h-1.64V31C23.36,31.199,23.199,31.36,23,31.36z M20.36,30.64h2.279V16	c0-0.199,0.161-0.36,0.36-0.36h1.64V4c0-1.456-1.184-2.64-2.64-2.64h-1.64L20.36,30.64L20.36,30.64z M12,31.36H9	c-0.199,0-0.36-0.161-0.36-0.36V13.36H8c-1.301,0-2.36-1.059-2.36-2.36V1h0.72v10c0,0.904,0.736,1.64,1.64,1.64h1	c0.199,0,0.36,0.161,0.36,0.36v17.64h2.28V13c0-0.199,0.161-0.36,0.36-0.36h1c0.904,0,1.64-0.736,1.64-1.64V1h0.72v10	c0,1.301-1.059,2.36-2.36,2.36h-0.64V31C12.36,31.199,12.199,31.36,12,31.36z M12.36,9h-0.72V1h0.72V9z M9.36,9H8.64V1h0.72	C9.36,1,9.36,9,9.36,9z"></path>
</svg>