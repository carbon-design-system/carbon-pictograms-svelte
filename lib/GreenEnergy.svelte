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
  <path d="M23,15.64h-2c-1.979,0-3.712,1.079-4.64,2.678 v-4.995c2.234-0.186,4-2.042,4-4.323V4c0-0.199-0.161-0.36-0.36-0.36h-1.64V1c0-0.199-0.161-0.36-0.36-0.36S17.64,0.801,17.64,1 v2.64h-3.28V1c0-0.199-0.161-0.36-0.36-0.36S13.64,0.801,13.64,1v2.64H12c-0.199,0-0.36,0.161-0.36,0.36v5 c0,2.281,1.766,4.137,4,4.323v6.995c-0.928-1.6-2.661-2.679-4.64-2.679H9c-0.199,0-0.36,0.161-0.36,0.36v2 c0,2.955,2.404,5.36,5.36,5.36h1.64V31h0.72v-7.64H18c2.955,0,5.36-2.405,5.36-5.36v-2C23.36,15.801,23.199,15.64,23,15.64z M15.64,24.131l-3.386-3.386l-0.509,0.51l3.385,3.385H14c-2.559,0-4.64-2.081-4.64-4.64v-1.64H11c2.559,0,4.64,2.081,4.64,4.64 V24.131z M12.36,4.36h7.28v1.28h-7.28V4.36z M12.36,9V6.36h7.28V9c0,2.007-1.633,3.64-3.64,3.64C13.993,12.64,12.36,11.007,12.36,9 z M22.64,18c0,2.559-2.081,4.64-4.64,4.64h-1.131l3.386-3.385l-0.51-0.51l-3.385,3.386V21c0-2.559,2.082-4.64,4.64-4.64h1.64V18z"></path>
</svg>