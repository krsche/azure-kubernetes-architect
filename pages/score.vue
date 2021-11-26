<template>
	<div class="score-results-page">
		<h1>Your Score</h1>
		<section v-for="pillar of results" :key=pillar.name>
			<h2 class="capitalize-case">{{ pillar.name }}</h2>

			<review-pillar-results
				heading="Increases ⬆️"
				symbol="+"
				:pillar=pillar.name
				:factors=pillar.increases
			></review-pillar-results>

			<review-pillar-results
				heading="Decreases ⬇️"
				:pillar=pillar.name
				:factors=pillar.decreases
			></review-pillar-results>

			<review-pillar-results
				heading="Neutrals"
				:pillar=pillar.name
				:factors=pillar.neutrals
			></review-pillar-results>
		</section>

		<!-- <hr>
		<pre>{{ results }}</pre> -->
	</div>
</template>

<script>
export default {
	computed: {
		results () {
      return this.$store.getters['decisions/analysis']
		}
	},

	methods: {
		hasResults (arry) {
			return arry.length > 0
		}
	}
}
</script>
