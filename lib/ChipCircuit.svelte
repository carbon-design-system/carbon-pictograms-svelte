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
  <path d="M24.426,31h-0.852v-2h0.852V31z M20.426,31h-0.852v-2h0.852V31z M16.425,31h-0.851v-2h0.851V31z M12.425,31h-0.851v-2h0.851V31z M8.425,31h-0.85v-2h0.851L8.425,31L8.425,31z M27,27.426H5c-0.235,0-0.425-0.19-0.425-0.426V5	c0-0.235,0.19-0.425,0.425-0.425h22c0.235,0,0.426,0.19,0.426,0.425v22C27.426,27.235,27.235,27.426,27,27.426z M5.425,26.574	h21.149V5.426H5.425V26.574z M31,24.426h-2v-0.852h2V24.426z M3,24.426H1v-0.852h2V24.426z M21,21.426H11	c-0.235,0-0.425-0.19-0.425-0.426V11c0-0.235,0.19-0.425,0.425-0.425h10c0.235,0,0.426,0.19,0.426,0.425v10	C21.426,21.235,21.235,21.426,21,21.426z M11.425,20.574h9.149v-9.149h-9.149C11.425,11.425,11.425,20.574,11.425,20.574z M31,20.426h-2v-0.852h2V20.426z M3,20.426H1v-0.852h2V20.426z M31,16.425h-2v-0.851h2V16.425z M3,16.425H1v-0.851h2V16.425z M31,12.425h-2v-0.851h2V12.425z M3,12.425H1v-0.851h2V12.425z M31,8.425h-2v-0.85h2V8.425z M3,8.425H1v-0.85h2V8.425z M24.426,3	h-0.852V1h0.852V3z M20.426,3h-0.852V1h0.852V3z M16.425,3h-0.851V1h0.851V3z M12.425,3h-0.851V1h0.851V3z M8.425,3h-0.85V1h0.851	L8.425,3L8.425,3z"></path>
</svg>