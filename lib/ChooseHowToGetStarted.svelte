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
  <path d="M30,30.36H2	c-0.199,0-0.36-0.161-0.36-0.36V2c0-0.199,0.161-0.36,0.36-0.36h26.64V1c0-0.199,0.161-0.36,0.36-0.36h2	c0.199,0,0.36,0.161,0.36,0.36v2c0,0.199-0.161,0.36-0.36,0.36h-0.64V30C30.36,30.199,30.199,30.36,30,30.36z M2.36,29.64h27.28	V3.36H29c-0.199,0-0.36-0.161-0.36-0.36V2.36H2.36V29.64z M29.36,2.64h1.279V1.36H29.36V2.64z M25,25.36H7	c-0.199,0-0.36-0.161-0.36-0.36V7c0-0.199,0.161-0.36,0.36-0.36h16.64V6c0-0.199,0.161-0.36,0.36-0.36h2	c0.199,0,0.36,0.161,0.36,0.36v2c0,0.199-0.161,0.36-0.36,0.36h-0.64V25C25.36,25.199,25.199,25.36,25,25.36z M7.36,24.64h17.28	V8.36H24c-0.199,0-0.36-0.161-0.36-0.36V7.36H7.36V24.64z M24.36,7.64h1.279V6.36H24.36V7.64z M20,20.36h-8	c-0.199,0-0.36-0.161-0.36-0.36v-8c0-0.199,0.161-0.36,0.36-0.36h6.64V11c0-0.199,0.161-0.36,0.36-0.36h2	c0.199,0,0.36,0.161,0.36,0.36v2c0,0.199-0.161,0.36-0.36,0.36h-0.64V20C20.36,20.199,20.199,20.36,20,20.36z M12.36,19.64h7.28	v-6.28H19c-0.199,0-0.36-0.161-0.36-0.36v-0.64h-6.28C12.36,12.36,12.36,19.64,12.36,19.64z M19.36,12.64h1.279v-1.28H19.36V12.64z"></path>
</svg>