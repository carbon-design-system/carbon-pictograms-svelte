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
  <path d="M22,28.36H7c-3.507,0-6.36-2.854-6.36-6.36S3.493,15.64,7,15.64h3v0.72H7	c-3.11,0-5.64,2.53-5.64,5.64S3.89,27.64,7,27.64h15V28.36z M25,16.36h-3v-0.72h3c3.11,0,5.64-2.53,5.64-5.64S28.11,4.36,25,4.36H10	V3.64h15c3.507,0,6.36,2.853,6.36,6.36S28.507,16.36,25,16.36z M15.64,16.645v1.105c0,0.199,0.161,0.36,0.36,0.36	s0.36-0.161,0.36-0.36v-1.105c0.229-0.128,0.39-0.364,0.39-0.645c0-0.414-0.336-0.75-0.75-0.75s-0.75,0.336-0.75,0.75	C15.25,16.281,15.411,16.517,15.64,16.645z M7,0.64H1C0.801,0.64,0.64,0.801,0.64,1v6c0,0.199,0.161,0.36,0.36,0.36h6	c0.199,0,0.36-0.161,0.36-0.36V1C7.36,0.801,7.199,0.64,7,0.64z M6.64,6.64H1.36V1.36h5.28C6.64,1.36,6.64,6.64,6.64,6.64z M20,12.64h-1.64v-2.145c0-1.299-1.059-2.355-2.36-2.355s-2.36,1.056-2.36,2.355v2.145H12c-0.199,0-0.36,0.161-0.36,0.36v7	c0,0.199,0.161,0.36,0.36,0.36h8c0.199,0,0.36-0.161,0.36-0.36v-7C20.36,12.801,20.199,12.64,20,12.64z M14.36,10.495	c0-0.901,0.736-1.635,1.64-1.635c0.904,0,1.64,0.734,1.64,1.635v2.145h-3.28V10.495z M19.64,19.64h-7.28v-6.28h7.28V19.64z M31,24.64h-6c-0.199,0-0.36,0.161-0.36,0.36v6c0,0.199,0.161,0.36,0.36,0.36h6c0.199,0,0.36-0.161,0.36-0.36v-6	C31.36,24.801,31.199,24.64,31,24.64z M30.64,30.64h-5.28v-5.28h5.279L30.64,30.64L30.64,30.64z"></path>
</svg>