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
  <path d="M25,31.36H7c-3.507,0-6.36-2.854-6.36-6.36S3.493,18.64,7,18.64h18c3.507,0,6.36,2.854,6.36,6.36	S28.507,31.36,25,31.36z M7,19.36c-3.11,0-5.64,2.529-5.64,5.64S3.89,30.64,7,30.64h18c3.11,0,5.64-2.529,5.64-5.64	s-2.53-5.64-5.64-5.64H7z M25,28.36c-1.853,0-3.36-1.508-3.36-3.36s1.508-3.36,3.36-3.36s3.36,1.508,3.36,3.36	S26.853,28.36,25,28.36z M25,22.36c-1.456,0-2.64,1.184-2.64,2.64s1.184,2.64,2.64,2.64s2.64-1.184,2.64-2.64S26.456,22.36,25,22.36	z M25,13.36H7c-3.507,0-6.36-2.853-6.36-6.36S3.493,0.64,7,0.64h18c3.507,0,6.36,2.853,6.36,6.36S28.507,13.36,25,13.36z M7,1.36	C3.89,1.36,1.36,3.89,1.36,7S3.89,12.64,7,12.64h18c3.11,0,5.64-2.53,5.64-5.64S28.11,1.36,25,1.36H7z M7,10.36	c-1.853,0-3.36-1.507-3.36-3.36S5.147,3.64,7,3.64S10.36,5.147,10.36,7S8.853,10.36,7,10.36z M7,4.36C5.544,4.36,4.36,5.544,4.36,7	S5.544,9.64,7,9.64S9.64,8.456,9.64,7S8.456,4.36,7,4.36z"></path>
</svg>