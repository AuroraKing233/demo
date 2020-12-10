<template>
  <div v-show="modelValue" ref="drawer" tabindex="0" class="sidebar-container" @keyup.esc="model = false" @click="model = false">
    <div class="container">
      <transition
        name="slide-fade"
        @after-leave="beforeLeave"
      >
        <div v-show="model" class="drawer_body" :style="drawerStyle" @click.stop="drawerclick">
          <div class="title">
            <span>{{ title }}</span>
            <span @click="model = false">X</span>
          </div>
          <slot name="title" />
          <input type="text">
        </div>
      </transition>
    </div>

  </div>
</template>

<script>
export default {
	props: {
		modelValue: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
			default: '标题',
		},
		direction: {
			type: String,
			default: 'right',
		},
		width: {
			type: String,
			default: '300px'
		}
	},
	emits: ['updata:show'],
	data(){
		return {
			model: false
		}
	},
	computed: {
		drawerStyle(){
			return{
				width: this.width
			}
		}
	},
	watch: {
		modelValue(newVal,oldVal){
			if(newVal){
				this.model = true
				this.$nextTick(()=>{
					this.$refs['drawer'].focus()
				})
			}
		}
	},
	mounted(){

	},
	methods: {
		beforeLeave(){
			this.$emit('updata:show',false)
		},
		drawerclick(){
			console.log(777)
		}
	},
}
</script>

<style lang="scss" scoped>
.sidebar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.3);
}
.container{
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
}
.drawer_body{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background: #FFF;
}

.slide-fade-enter-active {
  transition: all .5s ease-out;
}

.slide-fade-leave-active {
  transition: all .5s ease-out
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.title{
	padding: 20px;
	font-size: 20px;
	font-weight: bold;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
