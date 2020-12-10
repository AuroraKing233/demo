<template>
  <el-container>
    <el-container>
      <el-header>
        <div>icon</div>
        <div class="tabs">
          <div class="tab">
            <div>Home</div>
          </div>
          <div class="tab">
            <div>Home</div>
          </div>
        </div>
        <div><i style="font-size :20px" class="el-icon-bell" @click="show=!show" /></div>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
    <drawer v-model="show" direction="left" @updata:show="childClick">
      <template #title>
        <div class="title">标题666</div>
      </template>
    </drawer>
  </el-container>
</template>

<script>
import Drawer from './Drawer/index.vue'
export default {
	components: {
		Drawer
	},
	data() {
		return {
			show: false
		}
	},
	methods: {
		childClick(val){
			this.show = val
		}
	}
}
</script>
<style scoped>
  .el-container{
    height: 100%;
    display: flex;
  }
  .el-header{
    background-color: #E9EEF3;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3)
  }  
   .el-footer {
    /* background-color: #44cef6; */
    color: #333;
    text-align: center;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.3)
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    height: 100%;
  }
  .tabs{
    background: #e5e5e5;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  .tab{
    width: 100px;
    border-left:1px solid #000 ;
    border-right:1px solid #000 ;
    border-bottom:1px solid #000 ;
    text-align: center;
    line-height: 60px;
  }
  .menu{
    margin: 0 -8px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  .el-drawer__header span:focus {
    outline: 0;
  }
</style>

