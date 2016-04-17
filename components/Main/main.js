import Vue from 'vue'
import Main from './main.vue'
require('./main.less')

var CVM = new Vue({
	el:"#vue-cv",
	components:{
		"z-cv":Main
	}
})