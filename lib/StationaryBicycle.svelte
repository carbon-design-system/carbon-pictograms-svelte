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
  <path d="M10.977,21.704c0.834-0.612,1.383-1.592,1.383-2.704c0-1.853-1.507-3.36-3.36-3.36	S5.64,17.147,5.64,19S7.147,22.36,9,22.36c0.483,0,0.94-0.107,1.356-0.291l1.484,2.571H10v0.721h5V24.64h-2.328L10.977,21.704z M9,21.64c-1.456,0-2.64-1.184-2.64-2.64S7.544,16.36,9,16.36s2.64,1.184,2.64,2.64c0,0.846-0.407,1.591-1.027,2.074L9.312,18.82	c-0.1-0.174-0.32-0.233-0.492-0.132c-0.172,0.1-0.231,0.319-0.132,0.491l1.306,2.262C9.687,21.568,9.352,21.64,9,21.64z M27,28.36	c2.404,0,4.36-1.956,4.36-4.36c0-1.548-0.832-2.993-2.172-3.772l-8.736-5.626l5.336-9.241H27c2.404,0,4.36-1.956,4.36-4.36h-0.72	c0,2.007-1.633,3.64-3.64,3.64h-6v0.72h3.956l-5.11,8.851l-4.996-3.218l-0.008-0.005C12.88,9.801,10.451,9.39,8.268,9.801	L6.282,6.36H10c0.75,0,1.36-0.61,1.36-1.36S10.75,3.64,10,3.64H3C2.25,3.64,1.64,4.25,1.64,5S2.25,6.36,3,6.36h2.45l2.084,3.61	C3.565,11.054,0.64,14.692,0.64,19c0,5.04,4.005,9.163,9,9.354v2.286H1v0.721h30V30.64h-8.64v-2.28H27z M3,5.64	C2.647,5.64,2.36,5.353,2.36,5S2.647,4.36,3,4.36h7c0.353,0,0.64,0.287,0.64,0.64S10.353,5.64,10,5.64H3z M21.64,30.64H10.36v-2.28	h11.28V30.64z M10,27.64c-4.764,0-8.64-3.876-8.64-8.64s3.876-8.64,8.64-8.64c1.578,0,3.122,0.429,4.465,1.242l14.341,9.236	l0.015,0.009c1.122,0.65,1.819,1.858,1.819,3.153c0,2.007-1.633,3.64-3.64,3.64H10z"></path>
</svg>