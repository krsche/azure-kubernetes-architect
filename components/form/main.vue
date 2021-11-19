<template>
	<div class="form-categories">
		<category
			v-for="cat of categories"
			:title=cat.name
			:key=cat.name
			:questions=cat.questions
		>
		</category>
	</div>
</template>

<script>
	export default {
		computed: {
    	categories () {
      	return this.$store.getters.form
			}
		}
	}
</script>
