<template>
  <div class="app-wrapper">
    <Main />
  </div>
</template>

<script>
import {Main} from './components'

export default {
	name: 'App',
	components: {
		Main,
	},
	data(){
		return{
			name: ''
		}
	},
	mounted(){
		console.log(this.$store.state.user['name'])
	}
  
}
</script>

<style>

#app, html, body {
 height: 100%;
}
.app-wrapper{
  position: relative;
  height: 100%;
  background: #f0f0f4;
  /* background-image: linear-gradient(45deg, #FEAC5E , #C779D0,#4BC0C8); */
} 
</style>
