<template>
	<article class="question-box">
		<h2 class="question-title"><NuxtLink :to=question.path>{{ question.title }}</NuxtLink></h2>
		<p>{{ question.description }}</p>
		<!-- <p>Input name <code>{{ inputName }}</code></p> -->
		<p>Answer <code>{{ decisions[`${category}-${question.slug}`] }}</code></p>
		<!-- <pre>{{ question }}</pre> -->

		<form-input-radio
			v-for="f of question.factors"
			:category=category
			:question=question
			:key=f.slug
			:factor=f
			:stats=f.stats
			:checked="question.answer === f.slug"
			@selected="onSelected($event, $store, category, question)"
			></form-input-radio>
	</article>
</template>

<script>
	export default {
		computed: {
			// answer () {
			// 	// return 'bar'
			// 	return this.$store.getters.answerByQuestion(question.slug)
			// },

			decisions () {
				return this.$store.getters.decisions
			}
		},

		// Properties
		// ----------
		props: {
			question: {
				type: Object,
				required: true
			},

			// inputName: {
			// 	type: String,
			// 	required: true
			// },

			category: {
				type: String,
				required: true
			}
		},

		// Methods
		// -------
		methods: {
			onSelected: function (event, store, category, question) {
				/**
				 * event.selected.id ==> answer slug
				 * event.selected.stats
				 */
				// console.log(event)
				const selected = event.selected
				const mutation = selected.factor_id.substr(selected.factor_id.length - 9) == 'undecided'
					? 'REMOVE_DECISION'
					: 'UPDATE_DECISION'

				store.commit(mutation, {
					category: category,
					question: question,
					answer: event.selected
				})
			}
		}
	};
</script>
