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
  <path d="M26,31.36h-7v-0.72h3.14v-6.291c-2.512-0.186-4.5-2.296-4.5-4.864l1.005-6.539	C18.671,12.77,18.822,12.64,19,12.64h7c0.178,0,0.329,0.129,0.355,0.305l1,6.484c0.004,2.62-1.983,4.733-4.495,4.919v6.291H26V31.36	z M18.384,19.36l-0.028,0.179c0.005,2.238,1.861,4.103,4.145,4.103s4.14-1.864,4.14-4.157l-0.019-0.124h-8.238V19.36z M18.494,18.64	h8.015l-0.817-5.28h-6.383L18.494,18.64z M12.493,31.36H6.508c-1.03,0-1.868-0.757-1.868-1.688V14.439	c0-2.61,1.064-3.825,1.919-4.802C7.163,8.949,7.64,8.404,7.64,7.528V1c0-0.199,0.161-0.36,0.36-0.36h3c0.199,0,0.36,0.161,0.36,0.36	v6.528c0,0.876,0.477,1.421,1.081,2.11c0.855,0.976,1.92,2.191,1.92,4.801v15.233C14.361,30.604,13.523,31.36,12.493,31.36z M5.36,27.36v2.312c0,0.533,0.515,0.967,1.148,0.967h5.985c0.633,0,1.148-0.434,1.148-0.967V14.439c0-2.339-0.925-3.395-1.742-4.327	c-0.648-0.739-1.259-1.437-1.259-2.584V1.36H8.36v6.168c0,1.147-0.611,1.845-1.259,2.584C6.285,11.044,5.36,12.1,5.36,14.439v2.201	H11c0.199,0,0.36,0.161,0.36,0.36v10c0,0.199-0.161,0.36-0.36,0.36H5.36z M5.36,26.64h5.28v-9.28H5.36V26.64z"></path>
</svg>