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
  <path d="M24,23c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S24.552,23,24,23z M24.64,30.64h-5.28V27h-0.72	v3.64H1.36V17.36H15v-0.72H1c-0.199,0-0.36,0.161-0.36,0.36v14c0,0.199,0.161,0.36,0.36,0.36h24c0.199,0,0.36-0.161,0.36-0.36v-4	h-0.72V30.64z M4.36,13c0-4.213,3.427-7.64,7.64-7.64h1.131l-2.385,2.386l0.509,0.509L14.509,5l-3.255-3.254l-0.509,0.509	l2.385,2.386H12c-4.61,0-8.36,3.75-8.36,8.36v2h0.72C4.36,15.001,4.36,13,4.36,13z M31.36,1v24c0,0.199-0.161,0.36-0.36,0.36H17	c-0.199,0-0.36-0.161-0.36-0.36V1c0-0.199,0.161-0.36,0.36-0.36h14C31.199,0.64,31.36,0.801,31.36,1z M30.64,19.36H17.36v5.279	h13.28V19.36z M30.64,1.36H17.36v17.28h13.28V1.36z"></path>
</svg>