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
  <path d="M21,29.36h-2.8	c-2.69,0-4.112-1.335-4.112-3.86v-1.195C9.667,23.489,7.14,19.753,7.14,14c0-6.487,3.312-10.36,8.86-10.36	c5.631,0,8.86,3.776,8.86,10.36c0,5.616-2.364,9.348-6.5,10.292v1.348H21c0.199,0,0.36,0.161,0.36,0.36v3	C21.36,29.199,21.199,29.36,21,29.36z M16,4.36c-5.173,0-8.14,3.514-8.14,9.64c0,5.49,2.421,9.006,6.642,9.645	c0.176,0.026,0.306,0.178,0.306,0.355v1.5c0,2.143,1.078,3.14,3.393,3.14h2.439v-2.28H18c-0.199,0-0.36-0.161-0.36-0.36v-2	c0-0.173,0.123-0.32,0.292-0.354c4.004-0.772,6.208-4.198,6.208-9.646C24.14,7.874,21.173,4.36,16,4.36z M16,20.86	c-2.952,0-4.86-2.301-4.86-5.86v-2c0-3.56,1.908-5.86,4.86-5.86s4.86,2.3,4.86,5.86v2C20.86,18.56,18.952,20.86,16,20.86z M16,7.86	c-2.554,0-4.14,1.97-4.14,5.14v2c0,3.171,1.586,5.14,4.14,5.14s4.14-1.969,4.14-5.14v-2C20.14,9.83,18.554,7.86,16,7.86z"></path>
</svg>