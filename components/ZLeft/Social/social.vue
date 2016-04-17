<template>
	<div class="horizon"></div>
	<div class="social">
		<ul style="position:relative">
			<li v-for="social in socials">
				<img class="social-icon" :src="social.icon" alt="social">
				<a class="scoial-url" :href="social.trueUrl">{{social.url}}</a>
			</li>
		</ul>
	</div>
</template>
<script>
	let {left:{social}} = require('../../../cv.json')
	for(var s of social){
		if(typeof s.name==='undefined') continue

		if(s.name === "mail"){
			s.icon = s.icon || require("../../assets/mail.png")
			s.trueUrl = "mailto:"+s.url
		}else if(s.name === "github"){
			s.icon = s.icon || require("../../assets/github.png")
			s.trueUrl = "https://"+s.url
		}else if(s.name === "blog"){
			s.icon = s.icon || require("../../assets/blog.png")
			s.trueUrl = "https://"+s.url
		}else{
			s.trueUrl = "https://"+s.url
			if(typeof s.icon === 'undefined') throw error("please set the icon url")
		}
	}
	export default{
		data(){
			return{
				socials:social
			}
		}
	}
</script>
<style lang="less">
	@white: #EEF3F0;
	.social{
		margin-left: 7%;
		height: 20%;
	}
	.social-icon{
		width: 20px;
		height: 20px;
	}
	.scoial-url{
		color:@white;
		position: relative;
		top:-5px;
		font-size:0.8em;
		font-weight: 700;
	}
	.horizon{
		margin:auto 15%;
		border-top: 2px solid #677F94;
	}
</style>