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
  <path d="M22.64,17h0.721v14c0,0.199-0.161,0.36-0.36,0.36H1c-0.199,0-0.36-0.161-0.36-0.36V1	c0-0.199,0.161-0.36,0.36-0.36h22c0.199,0,0.36,0.161,0.36,0.36v6h-0.72V1.36H1.36v29.28h21.28C22.64,30.64,22.64,17,22.64,17z M12.36,25.958v-2.031C12.733,23.782,13,23.425,13,23c0-0.552-0.448-1-1-1s-1,0.448-1,1c0,0.425,0.267,0.782,0.64,0.927v2.031H12.36	z M31.36,12c0,1.025-0.835,1.86-1.86,1.86H17.027c-0.758,2.042-2.726,3.5-5.027,3.5c-2.956,0-5.36-2.405-5.36-5.36	S9.044,6.64,12,6.64c2.302,0,4.27,1.458,5.027,3.5H29.5C30.525,10.14,31.36,10.975,31.36,12z M16.64,12	c0-2.559-2.082-4.64-4.64-4.64S7.36,9.441,7.36,12s2.082,4.64,4.64,4.64S16.64,14.559,16.64,12z M30.64,12	c0-0.628-0.511-1.14-1.14-1.14H17.238c0.08,0.368,0.122,0.749,0.122,1.14s-0.042,0.772-0.122,1.14H29.5	C30.129,13.14,30.64,12.628,30.64,12z"></path>
</svg>