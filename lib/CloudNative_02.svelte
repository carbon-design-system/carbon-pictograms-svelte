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
  <path d="M27,28.36H15c-0.199,0-0.36-0.161-0.36-0.36	V16c0-0.199,0.161-0.36,0.36-0.36h12c0.199,0,0.36,0.161,0.36,0.36v5.47c1.873-0.885,3.279-3.217,3.279-5.557	c0-2.863-2.233-5.259-5.084-5.454c-0.182-0.013-0.325-0.159-0.335-0.341c-0.197-3.79-3.322-6.758-7.113-6.758	c-2.752,0-5.286,1.616-6.457,4.117c-0.082,0.175-0.288,0.254-0.463,0.181C10.323,7.303,9.412,7.123,8.48,7.123	c-3.927,0-7.122,3.2-7.122,7.133c0,3.685,2.634,6.93,5.996,7.388L12,21.64v0.721H7.307C3.485,21.843,0.64,18.36,0.64,14.256	c0-4.33,3.518-7.853,7.841-7.853c0.914,0,1.809,0.157,2.667,0.468c1.346-2.581,4.042-4.23,6.959-4.23c4.07,0,7.442,3.107,7.81,7.13	c3.077,0.368,5.443,3.008,5.443,6.143c0,2.726-1.738,5.452-4,6.34V28C27.36,28.199,27.199,28.36,27,28.36z M15.36,27.64h11.28V16.36	H15.36V27.64z M20,19.36h-3v-0.72h3V19.36z"></path>
</svg>