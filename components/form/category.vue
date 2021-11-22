<template>
	<section class="content">
		<h1 class="category-title">{{ title }}</h1>
		<form-question
			v-for="question of questions"
			:key="question.slug"
			:question=question
			:inputName="inputName(title, question)"
		>
		</form-question>

		<!-- <pre>{{ questions }}</pre> -->
	</section>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true
			},
			questions: {
				type: Array,
				required: true
			}
		},

		methods: {
			inputName: function (category, question) {
				return `${category}-${question.slug}`
			}
		}
	}
</script>
