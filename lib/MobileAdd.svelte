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
  <path d="M20,28.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S20.552,28.5,20,28.5z M29.36,31V1	c0-0.199-0.161-0.36-0.36-0.36H11c-0.199,0-0.36,0.161-0.36,0.36v2.647c-4.443,0.189-8,3.863-8,8.353s3.557,8.163,8,8.353V31	c0,0.199,0.161,0.36,0.36,0.36h18C29.199,31.36,29.36,31.199,29.36,31z M11.36,24.36h17.28v6.279H11.36V24.36z M11.36,20.353	c4.443-0.189,8-3.863,8-8.353s-3.557-8.163-8-8.353V1.36h17.28v22.28H11.36V20.353z M18.64,12c0,4.213-3.427,7.64-7.64,7.64	S3.36,16.213,3.36,12S6.787,4.36,11,4.36S18.64,7.787,18.64,12z M11.36,12.359H15v-0.72h-3.64V8h-0.72v3.64H7v0.72h3.64V16h0.72	C11.36,16,11.36,12.359,11.36,12.359z"></path>
</svg>