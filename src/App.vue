<template>
	<div class="container">
		<Search/>
		<List/>
	</div>
</template>

<script>
	import Search from "./components/Search.vue"
	import List from "./components/List.vue"
	export default {
		name:'App',
		components:{
			Search,List
		},
		mounted() {
			/**
			 * 解决 css 引入图片在 github pages 无法获取的问题
			 */
			const { NODE_ENV } = process.env;
			document.documentElement.className = NODE_ENV;
		}
	}
</script>

<style>
	
</style>
