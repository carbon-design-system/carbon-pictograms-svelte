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
  <path d="M16,31.36C7.53,31.36,0.64,24.47,0.64,16S7.53,0.64,16,0.64S31.36,7.53,31.36,16	S24.47,31.36,16,31.36z M15.385,30.627c0.204,0.009,0.409,0.013,0.615,0.013c4.741,0,8.963-2.265,11.64-5.77V12.008h0.721v11.831	c1.442-2.268,2.279-4.957,2.279-7.839c0-1.999-0.402-3.904-1.13-5.641L18.363,3.924l0.36-0.624l10.249,5.917	c-2.174-4.141-6.273-7.119-11.101-7.738L6.723,7.916l-0.36-0.624l10.252-5.919C16.412,1.364,16.206,1.36,16,1.36	c-4.741,0-8.963,2.266-11.64,5.771v12.862H3.64V8.161C2.197,10.429,1.36,13.119,1.36,16c0,1.998,0.402,3.903,1.13,5.641	l11.147,6.436l-0.36,0.623L3.028,22.782c2.174,4.142,6.273,7.12,11.101,7.739l11.148-6.437l0.359,0.623L15.385,30.627z M22.36,20	h-0.72v-8h0.721L22.36,20L22.36,20z M18.36,20h-0.72v-5h0.721L18.36,20L18.36,20z M14.36,20h-0.72v-8h0.72V20z M10.36,20H9.64v-3	h0.72C10.36,17,10.36,20,10.36,20z"></path>
</svg>