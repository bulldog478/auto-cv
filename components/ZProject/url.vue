<template>
	<a :href="url"><h3>{{name}}</h3></a>
</template>
<script>
	export default{
		props:['name','url']
	}
</script>
<style>
	
</style>
