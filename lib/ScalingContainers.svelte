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
  <path d="M16,31.36c-0.059,0-0.117-0.015-0.171-0.043	l-13-7C2.713,24.254,2.64,24.133,2.64,24V8c0-0.132,0.073-0.254,0.189-0.317l13-7c0.107-0.058,0.234-0.058,0.342,0l13,7	C29.287,7.746,29.36,7.868,29.36,8v16c0,0.133-0.073,0.254-0.189,0.317l-13,7C16.117,31.346,16.059,31.36,16,31.36z M10.36,27.555	L16,30.591l5.64-3.036v-7.973l-5.479,2.74c-0.102,0.051-0.221,0.051-0.322,0l-5.479-2.74V27.555z M16,15.64	c0.055,0,0.11,0.013,0.161,0.038l6,3C22.283,18.74,22.36,18.864,22.36,19v8.167l2.279-1.229V14.212L16,9.412l-8.64,4.8v11.727	l2.28,1.229V19c0-0.137,0.077-0.261,0.199-0.322l6-3C15.89,15.653,15.945,15.64,16,15.64z M16,8.64c0.06,0,0.121,0.015,0.175,0.045	l9,5c0.114,0.064,0.186,0.184,0.186,0.315v11.551l3.279-1.766V8.215L16,1.409L3.36,8.215v15.57l3.28,1.766V14	c0-0.131,0.071-0.251,0.185-0.315l9-5C15.879,8.655,15.94,8.64,16,8.64z M10.805,19L16,21.598L21.195,19L16,16.402L10.805,19z"></path>
</svg>