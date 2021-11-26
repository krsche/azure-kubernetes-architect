<template>
	<article v-if=hasFactors>
		<h3>{{ heading }}</h3>
		<ul>
			<li v-for="factor of factors" :key=factor.slug>
				<h4>
					<NuxtLink :to=factor.question.path>{{ factor.question.shortTitle }}</NuxtLink> -
					{{ factor.title }}
					<span class="score-delta">{{ symbol }}{{ factor.delta }}</span>
				</h4>
				<p>{{ factor.description }}</p>
			</li>
		</ul>
	</article>
</template>

<script>
export default {
	props: {
		factors: {
			type: Array,
			required: true
		},

		heading: {
			type: String,
			required: true
		},

		pillar: {
			type: String,
			required: true
		},

		symbol: {
			type: String,
			required: false
		}
	},

	computed: {
		hasFactors () {
			console.log(`${this.pillar} ${this.heading} hasFactors()`, this.factors)
			return this.factors.length > 0
		}
	}
}
</script>

<style scoped>
	h4 {
		margin-bottom: 0.3em;
	}

	li p {
		margin: 0;
	}

	.score-delta {
		font-weight: 400;
	}
</style>