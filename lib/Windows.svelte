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
  <path d="M27,31.36H1c-0.199,0-0.36-0.161-0.36-0.36V12c0-0.199,0.161-0.36,0.36-0.36h3.64V1	c0-0.199,0.161-0.36,0.36-0.36h26c0.199,0,0.36,0.161,0.36,0.36v19c0,0.199-0.161,0.36-0.36,0.36h-3.64V31	C27.36,31.199,27.199,31.36,27,31.36z M1.36,30.64h25.28V15.36H1.36V30.64z M27.36,19.64h3.279V4.36H5.36v7.28H27	c0.199,0,0.36,0.161,0.36,0.36V19.64z M1.36,14.64h25.28v-2.28H1.36V14.64z M5.36,3.64h25.28V1.36H5.36V3.64z M29,2.5	C29,2.776,28.776,3,28.5,3S28,2.776,28,2.5S28.224,2,28.5,2S29,2.224,29,2.5z M26.5,2C26.224,2,26,2.224,26,2.5S26.224,3,26.5,3	S27,2.776,27,2.5S26.776,2,26.5,2z M24.5,2C24.224,2,24,2.224,24,2.5S24.224,3,24.5,3S25,2.776,25,2.5S24.776,2,24.5,2z M24.5,13	c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5S24.776,13,24.5,13z M22.5,13c-0.276,0-0.5,0.224-0.5,0.5	s0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5S22.776,13,22.5,13z M20.5,13c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5	S20.776,13,20.5,13z"></path>
</svg>