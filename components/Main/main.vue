<template>
	<div class="main">
		<div id="main-left">
			<z-left></z-left>
		</div>
		<div id="main-right">
			<z-project :projects.once="projs"></z-project>
<!-- 			<z-work></z-work>
			<z-education></z-education> -->
		</div>
	</div>
</template>
<script>
	import ZLeft from '../ZLeft/ZLeft.vue'
	import ZProject from '../ZProject/ZProject.vue'
	let project = require('../../cv.json').project
	// import ZWork from '../ZWork/ZWork.vue',
	// import ZEducation from '../ZEducation/ZEducation.vue'


	export default{
		components:{
			ZLeft,ZProject
			// ,ZProject,ZWork,ZEducation
		},
		data(){
			return {
				projs:project
			}
		}
	}
</script>
<style lang="less">
	@left: #7B9AB5;
	@right: #E8E6DF;
	
	.main{
		width: 100%;
		height: 100%;
		overflow:hidden;
	}
	#main-left{
		width:32%;
		height:98%;
		background-color: @left;
		float: left;
	}
	#main-right{
		width:68%;
		height:98%;
		background-color: @right;
		float: left;
	}
</style>