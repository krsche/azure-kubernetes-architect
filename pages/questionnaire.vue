<template>
	<div class="app-container">
		<app-header/>

		<div class="app-main wrapper">
			<div class="app-body">
				<category
					v-for="cat of categories"
					:title=cat.name
					:key=cat.name
					:questions=cat.questions
				>
				</category>

				<!-- <pre>{{ questionnaire }}</pre> -->
				<pre>{{ posts }}</pre>
			</div>
			<div class="app-sidebar">
				<score/>
			</div>
		</div>
		<app-footer/>
	</div>
</template>

<script>
	// Load order for ./contents/questions folder
	const categoryDirs = [
		'requirements',
		'networking'
	]

	const formContent = [] // content db

	export default {
		// data: {
		// 	// return {
		// 		hello: 'world',
		// 	// 	foo: () => 'bar'
		// 	// }
		// },

    data() {
      return {
        posts: ['one', 'two']
      }
    },

		/**
		 * [SSR] Fetch and load Markdown Content
		 * Loads only title and metadata without body
		 * Sort order set in `categoryDirs` above. Also easer than
		 * traversing directory and prefixing everything with numbers
		 *
		 * @async
		 * @returns {Array} of all questions and questions per defined sort order
		 */
		async asyncData({ $content, params, store }) { // SSR only
			const undecidedTemplate = await $content('factors/undecided').fetch()

			// console.log('GOT STORE????', store)

			// --- Questions per Category ---
			for (const c of categoryDirs) {
				const questions = await $content(`questions/${c}`)
					.sortBy('path')
					.without(['toc', 'body'])
					.fetch()

				// --- Answers per Question ---
				for (const q of questions) {
					const factors  = q.factors // required, defined in question markdown
					q.factors = []
					for (const f of factors) {
						let factor = await $content(`/factors/${f.path}`)
							.without(['toc', 'body'])
							.fetch()

						// Add to possible answers
						q.factors.push(_formatStats(factor))
					}

					// Add "undecided" option
					q.factors.push(_createUndecided(q, undecidedTemplate))
				}

				// Add to content db
				formContent.push(questions)
			}

			let categories = []
			categoryDirs.forEach((c, i) => {
				categories.push({
					name: c,
					questions: formContent[i]
				})
			})

			// console.log(categories)
			store.commit('LOAD_FORM', categories)
			// store.dispatch('DEBUG_STORAGE')

			return {
				categories
			}
		},
	}

	// Helpers
	// -------

	// Because nuxt content cannot process nested YAML front-matter
	// we have to manually extra the states to create a `points` object
	const STATS = [
		'complexity',
		'security',
		'price',
		'operations'
	]

	/**
	 * Lumps stats into `stats` property and deletes,
	 * e.g. foo.complexity ==> foo.stats.complexity
	 * Needed because nuxt-content does not support nested frontmatter
	 *
	 * @param factor {Object}
	 * @returns {Object}
	 */
	function _formatStats (factor) {

		let stats = {}
		STATS.forEach(s => {
			stats[s] = factor[s]
			delete factor[s]
		})
		factor.stats = stats
		return factor
	}

	/**
	 * Need a unique slug by prefixing with parent question's slug
	 *
	 * @param question {Object}
	 * @param template {Object} Base object content, usu. from factors/undecided.md
	 * @return {Object}
	 */
	function _createUndecided (question, template) {
		let copy = {...template}
		return {
			..._formatStats(copy),
			slug: `${question.slug}-undecided`
		}
	}
</script>

