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
  <path d="M15.819,30.311l-12-7C3.708,23.246,3.64,23.128,3.64,23V9h0.72v13.793l11.821,6.896	L15.819,30.311z M30,29.36h-6.5c-0.199,0-0.36-0.161-0.36-0.36v-6.14H17c-0.199,0-0.36-0.161-0.36-0.36V16	c0-0.199,0.161-0.36,0.36-0.36h6.5c0.199,0,0.36,0.161,0.36,0.36v6.14H30c0.199,0,0.36,0.161,0.36,0.36V29	C30.36,29.199,30.199,29.36,30,29.36z M23.86,28.64h5.779v-5.78H23.86V28.64z M17.36,22.14h5.779v-5.78H17.36V22.14z M8.36,16H7.64	V6h0.72V16z M28.36,15h-0.72V9.207L16,2.417l-3.64,2.116V13h-0.72V4.325c0-0.128,0.068-0.247,0.179-0.311l4-2.325	c0.112-0.065,0.251-0.065,0.362,0l12,7C28.292,8.753,28.36,8.872,28.36,9V15z"></path>
</svg>