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
  <path d="M16,31.36c-0.059,0-0.117-0.015-0.171-0.043l-13-7C2.713,24.254,2.64,24.133,2.64,24V10h0.72v13.785	l12.28,6.612V17.312c-0.576-0.158-1-0.686-1-1.312c0-0.132,0.019-0.26,0.054-0.381L2.812,8.307C2.702,8.239,2.636,8.118,2.64,7.99	c0.004-0.129,0.076-0.246,0.189-0.307l13-7c0.108-0.058,0.236-0.057,0.343,0.001l11,6l-0.346,0.632L15.999,1.41L3.721,8.021	l11.352,6.985c0.486-0.454,1.369-0.454,1.855,0l11.884-7.313c0.111-0.068,0.251-0.07,0.364-0.008C29.289,7.75,29.36,7.87,29.36,8v16	c0,0.132-0.072,0.253-0.188,0.316l-11,6l-0.346-0.633l10.812-5.897V8.644l-11.334,6.975C17.341,15.74,17.36,15.868,17.36,16	c0,0.625-0.425,1.153-1,1.312V31c0,0.127-0.066,0.244-0.175,0.309C16.128,31.343,16.064,31.36,16,31.36z M16,15.36	c-0.353,0-0.64,0.287-0.64,0.64s0.287,0.64,0.64,0.64s0.64-0.287,0.64-0.64S16.353,15.36,16,15.36z"></path>
</svg>