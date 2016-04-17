<template>
	<div class="project">
		<ul>
			<li v-for="project in projects" track-by="url">
				<h2>helo</h2>
				<proj-url :name="project.name" :url="project.url"></proj-url>
				<key keys="{{project.keys}}"></key>	
			</li>
		</ul>
	</div>
</template>
<script>
	import Key from './key.vue'
	import ProjUrl from './url.vue'
	export default{
		props:['projects'],
		data(){
			return {c:3}
		},
		components:{Key,ProjUrl},
		created:function(){
			console.log(234)
		},
		compiled:function(){
			console.log(456)
		}
	}
</script>