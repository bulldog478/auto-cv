<style lang="less">
	.left{
	}
</style>
<template>
	<div class="left">
		<z-info></z-info>
		<z-kpi></z-kpi>
		<z-social></z-social>
	</div>
</template>
<script>
	import Info from './Info/Info.vue'
	import Kpi from './Kpi/kpi.vue'
	import Social from './Social/social.vue'
	export default{
		components:{
			"z-info":Info,
			"z-kpi":Kpi,
			"z-social":Social
		}
	}
</script>