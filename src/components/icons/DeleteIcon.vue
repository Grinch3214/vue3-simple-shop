<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
		:stroke="props.stroke"
		:width="props.width"
		:height="props.height"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
      d="M10 12v5M14 12v5M4 7h16M6 10v8a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-8M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9V5Z"
    />
  </svg>
</template>

<script setup>
	const props = defineProps({
		stroke: {
			type: String,
			default: '#1C274C'
		},
		width: {
			type: String,
			default: '40px'
		},
		height: {
			type: String,
			default: '40px'
		}
	})
</script>