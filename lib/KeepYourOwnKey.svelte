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
  <path d="M16,31.36c-4.104,0-7.898-2.351-9.728-6.007	C6.182,25.357,6.091,25.36,6,25.36c-2.956,0-5.36-2.405-5.36-5.36S3.044,14.64,6,14.64c0.277,0,0.549,0.021,0.815,0.062	c0.979-1.551,2.295-2.794,3.825-3.661V6c0-2.956,2.404-5.36,5.36-5.36c2.955,0,5.36,2.404,5.36,5.36v5.068	c2.748,1.571,4.777,4.31,5.341,7.571H31c0.199,0,0.36,0.161,0.36,0.36v5c0,0.199-0.161,0.36-0.36,0.36h-2	c-0.199,0-0.36-0.161-0.36-0.36c0-0.353-0.287-0.64-0.64-0.64s-0.64,0.287-0.64,0.64c0,0.199-0.161,0.36-0.36,0.36h-0.749	C24.654,28.558,20.567,31.36,16,31.36z M7.034,25.26c1.75,3.283,5.22,5.38,8.966,5.38c4.175,0,7.919-2.503,9.477-6.279H25	c-0.199,0-0.36-0.161-0.36-0.36v-2.64H11.185C10.667,23.332,9.052,24.864,7.034,25.26z M6,15.36c-2.559,0-4.64,2.082-4.64,4.64	S3.441,24.64,6,24.64s4.64-2.081,4.64-4.64S8.559,15.36,6,15.36z M29.312,23.64h1.328v-4.28H11.322	c0.025,0.21,0.038,0.423,0.038,0.64s-0.013,0.43-0.038,0.64H25c0.199,0,0.36,0.161,0.36,0.36v2.64h1.328	c0.158-0.575,0.687-1,1.312-1S29.153,23.064,29.312,23.64z M11.185,18.64H25.97c-0.882-4.749-5.096-8.28-9.97-8.28	c-3.43,0-6.548,1.678-8.437,4.513C9.331,15.412,10.714,16.844,11.185,18.64z M16,9.64c1.646,0,3.224,0.376,4.64,1.052V6	c0-2.559-2.081-4.64-4.64-4.64S11.36,3.441,11.36,6v4.668C12.781,9.999,14.357,9.64,16,9.64z M6,22.36	c-1.301,0-2.36-1.059-2.36-2.36S4.699,17.64,6,17.64S8.36,18.698,8.36,20S7.301,22.36,6,22.36z M6,18.36	c-0.904,0-1.64,0.735-1.64,1.64S5.096,21.64,6,21.64S7.64,20.904,7.64,20S6.904,18.36,6,18.36z"></path>
</svg>