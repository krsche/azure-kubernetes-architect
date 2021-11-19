<template>
	<div>
		<pre>{{ fields }}</pre>
	</div>
</template>

<script>
	export default {
		computed: {
    	fields () {
      	return this.$store.getters.form
			}
		}
	}
</script>
