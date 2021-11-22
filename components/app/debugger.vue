<template>
	<pre>{{ decisions }}</pre>
</template>

<script>
	export default {

		computed: {
			decisions () {
				return this.$store.getters.decisions
			}
		}

	}
</script>
