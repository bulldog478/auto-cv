<template>
	<div class="proj-key">
		<ul>
			<li v-for="key in keys">
				<div class="tag">{{key}}</div>
				<div class="connector"></div>
			</li>
		</ul>
	</div>	
</template>
<script>
	export default{
		props:['keys'],
		created:function(){
			console.log(123);
		}
	}
</script>
<style lang="less">
	.proj-key{
		float: right;
	}
	@left: #7B9AB5;
	@connector: #719AB5;
	.tag{
		background-color: @left;
		height:30px;
	}
	.connector{
		background-color: @connector;
		height: 7px;
	}
</style>