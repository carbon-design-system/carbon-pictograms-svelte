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
  <path d="M9.36,29.36H3v-0.72h5.131l-7.385-7.385l0.509-0.51l7.386,7.386V23h0.72v6.36H9.36z M27.36,18	h-0.72v-5c0-1.456-1.184-2.64-2.64-2.64s-2.64,1.185-2.64,2.64h-0.72c0-1.853,1.508-3.36,3.36-3.36s3.36,1.507,3.36,3.36V18z M24,8.36c-1.302,0-2.36-1.059-2.36-2.36S22.698,3.64,24,3.64S26.36,4.699,26.36,6S25.302,8.36,24,8.36z M24,4.36	c-0.904,0-1.64,0.736-1.64,1.64S23.096,7.64,24,7.64S25.64,6.904,25.64,6S24.904,4.36,24,4.36z M27,29.36h-3.643	c-0.621,0-1.229-0.252-1.669-0.691L6.38,13.361L5,13.36c-2.404,0-4.36-1.954-4.36-4.356C0.64,6.596,2.596,4.64,5,4.64h3.614	c0.63,0,1.223,0.245,1.669,0.691l15.309,15.308H27c2.404,0,4.36,1.957,4.36,4.361S29.404,29.36,27,29.36z M5,5.36	C2.993,5.36,1.36,6.993,1.36,9c0,2.009,1.633,3.64,3.64,3.64l1.529,0.001c0.096,0,0.187,0.038,0.254,0.105l15.415,15.413	c0.305,0.306,0.728,0.48,1.159,0.48H27c2.007,0,3.64-1.633,3.64-3.64c0-2.008-1.633-3.641-3.64-3.641h-1.56	c-0.11,0-0.21-0.051-0.276-0.129L9.774,5.84c-0.311-0.31-0.722-0.48-1.16-0.48H5z"></path>
</svg>