<style lang="less">
	@kpi: #C4D4DA;
	@white: #EEF3F0;

	.ellipses(){
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.kpi{
		margin-left: 5%;
	}
	.kpi-li{
		margin-bottom: 3%;
	}
	.skill{
		max-width:35%;
		min-width: 35%;
		text-align: right;
		font-size: 20px;
		color:@white;
		font-weight:600;
		.ellipses
	}
	.score{
		width:40%;
		text-align: left;
		background-color: @kpi;
		border-radius: 15px;
	}
	.index{
		background-color: white;
		z-index:100;
		display: block !important;
		border-radius: 15px;
	}
	.skill, .score, .index{
		height: 27px;
		display: inline-block;
	}
	ul>li{
		list-style-type:none;
	}

</style>
<template>
	<div class="kpi">
		<ul>
			<li v-for="kpi in kpis" class="kpi-li">
				<div class="skill" title="{{kpi.skill}}">{{kpi.skill}}</div>
				<div class="score">
					 <div class="index" :style="{width:kpi.score + '%'}"></div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	import {left} from '../../../cv.json'
	var kpi = left.kpi

	export default{
		data(){
			return {kpis:kpi}
		}
	}
</script>
