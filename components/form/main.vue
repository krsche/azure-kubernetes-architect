<template>
	<div class="form-categories">
		<!-- <pre>
			{{ decisions }}
		</pre> -->

		<form-category
			v-for="cat of categories"
			:title=cat.name
			:key=cat.name
			:questions=cat.questions
		>
		</form-category>
	</div>
</template>

<script>
	export default {
		computed: {
    	categories () {
      	return this.$store.getters.form
			},
    	// decisions () {
      // 	return this.$store.getters.decisions
			// }
		}
	}
</script>
