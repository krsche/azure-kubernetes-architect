<template>
	<div>
		<app-header/>
		<main class="container-wrapper">
			<nuxt-content :document="homepage" />
		</main>
		<app-footer/>
	</div>
</template>


<script>
  export default {
    async asyncData({ $content, params }) {
      const homepage = await $content('home').fetch()
      return {
        homepage
      }
    }
  }
</script>