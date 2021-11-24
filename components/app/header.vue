<template>
	<header class="app-header">
		<div class="container-wrapper">
			<h1><a href="/">Azure Kubernetes Architect</a></h1>
			<button class="btn-reset" @click="onClear">Clear Data</button>
		</div>
	</header>
</template>

<script>
export default {
	methods: {
		onClear: function (event, store) {
			console.log('AppHeader.vue - onClear()')
			this.$store.commit('RESET_DATA')
		}
	}
}
</script>


<style scoped>
.btn-reset {
	float: right;
}
</style>