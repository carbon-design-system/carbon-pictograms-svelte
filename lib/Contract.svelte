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
  <path d="M27,31.36H8c-0.199,0-0.36-0.161-0.36-0.36v-1.64H6c-0.199,0-0.36-0.161-0.36-0.36v-1.64H5	c-0.199,0-0.36-0.161-0.36-0.36V3c0-0.199,0.161-0.36,0.36-0.36h4.64V2c0-0.199,0.161-0.36,0.36-0.36h1.64V1	c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v0.64H18c0.199,0,0.36,0.161,0.36,0.36v0.64H23	c0.199,0,0.36,0.161,0.36,0.36v1.64H25c0.199,0,0.36,0.161,0.36,0.36v1.64H27c0.199,0,0.36,0.161,0.36,0.36v24	C27.36,31.199,27.199,31.36,27,31.36z M8.36,30.64h18.28V7.36h-1.28V29c0,0.199-0.161,0.36-0.36,0.36H8.36V30.64z M6.36,28.64h18.28	V5.36h-1.28V27c0,0.199-0.161,0.36-0.36,0.36H6.36V28.64z M5.36,26.64h17.28V3.36h-4.28V4c0,0.199-0.161,0.36-0.36,0.36h-8	C9.801,4.36,9.64,4.199,9.64,4V3.36H5.36V26.64z M10.36,3.64h7.28V2.36H16c-0.199,0-0.36-0.161-0.36-0.36V1.36h-3.28V2	c0,0.199-0.161,0.36-0.36,0.36h-1.64C10.36,2.36,10.36,3.64,10.36,3.64z M20.5,21.36h-13v-0.72h13V21.36z M20.5,17.36h-13v-0.72h13	V17.36z M20.5,13.36h-13v-0.72h13V13.36z M20.5,9.36h-13V8.64h13V9.36z"></path>
</svg>