<template>
	<header class="app-header">
		<div class="wrapper">
			<h1>Azure Kubernetes Architect</h1>
			<button @click="onClick">debug storage</button>
		</div>
	</header>
</template>

<script>
export default {
	methods: {
		onClick: function (event, store) {
			console.log('*** CLICKED DEBUG ***')
			// console.log(store)
			const a = this.$store.commit('DEBUG_STORAGE')
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