<template>
	<article class="question-box">
		<h2 class="question-title"><NuxtLink :to=question.path>{{ question.title }}</NuxtLink></h2>
		<p>{{ question.description }}</p>
		<p>Answer? {{ question.answer }}</p>
		<!-- <pre>
{{ question }}
		</pre> -->

		<form-input-radio
			v-for="f of question.factors"
			:inputName=question.slug
			:key=f.slug
			:factor=f
			:stats=f.stats
			:checked="question.answer === f.slug"
			@selected="onSelected($event, $store, question)"
			></form-input-radio>
	</article>
</template>

<script>
	export default {

		// Properties
		// ----------
		props: {
			question: {
				type: Object,
				required: true
			}
		},

		// Methods
		// -------
		methods: {
			onSelected: function (event, store, question) {
				/**
				 * event.selected.id ==> slug
				 * event.selected.stats
				 */
				const selected = event.selected
				const mutation = selected.id.substr(selected.id.length - 9) == 'undecided'
					? 'REMOVE_DECISION'
					: 'UPDATE_DECISION'

				store.commit(mutation, {
					question: question,
					answer: event.selected
				})
			}
		}
	};
</script>
