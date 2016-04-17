<template>
	<div class="info">
		<img class="avatar" :src="avatar" alt="avatar">	
		<h1 class="name">{{name}}</h1>
		<p class="motto">{{motto}}</p>	
		<p class="role">{{role}}</p>
		<div class="horizon"></div>
	</div>
</template>
<script>
	let {info} = require('../../../cv.json').left
	export default{
		data(){
			return info;
		}
	}
</script>
<style lang="less">
	@left: #7B9AB5;
	@motto: #F9FCFA;
	@kpi: #C4D4DA;
	@white: #EEF3F0;
	.word-color(){
		color:@white ;
	}
	.info{
		width: 100% ;
		height: 30% ;
	}
	.avatar{
		margin-top: 10%;
		width:150px;
		height:150px;
		border-radius: 50%;
	}
	.name{
		font-weight: bold;
	}
	.role{
		font-size: 1.2em;
	}
	.info, .name, .role{
		text-align: center;
		.word-color
	} 
	.motto,{
		margin:auto 20%;
		font-size: 0.75em;
		color:@motto ;
	}
	.horizon{
		margin:auto 15%;
		border-top: 2px solid #677F94;
	}
</style>

