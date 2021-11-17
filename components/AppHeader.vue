<template>
	<header class="app-header">
		<div class="wrapper">
			<h1>Azure Kubernetes Architect</h1>
			<button @click="onClick">debug</button>
			<button @click="onClear">clear storage</button>
		</div>
	</header>
</template>

<script>
export default {
	methods: {
		onClick: function (event, store) {
			console.log('AppHeader.vue - onClick()')
			this.$store.dispatch('DEBUG_STORAGE')
		},

		onClear: function (event, store) {
			console.log('AppHeader.vue - onClear()')
			this.$store.commit('RESET_DATA')
		}
	}
}
</script>


<style>
	.app-header {
		background: var(--purple-color);
		color: #fff;
		padding: 0.5rem 0;
	}

	.app-header h1 {
		margin: 0;
		font-size: 1.4rem;
	}
</style>