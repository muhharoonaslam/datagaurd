<template>
    <el-container style="height: 100vh;padding:0" >
    <el-aside >
      <span>
        <img :src="image" class="logo" />
        <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        text-color="#000000"
        active-text-color="#000000"
        background-color="#F1F1F1"
        :router="true"
        >
        <el-menu-item index="1" :route="{path:'/marketing'}">
            <i class="el-icon-s-grid"></i>
            <span>Marketing</span>
        </el-menu-item>
        <el-menu-item index="2" :route="{path:'/finance'}">
            <i class="el-icon-document"></i>
            <span>Finance</span>
        </el-menu-item>
        <el-menu-item index="3" :route="{path:'/personal'}">
            <i class="el-icon-setting"></i>
            <span>Personal</span>
        </el-menu-item>
        </el-menu>

      </span>
        <div class="all-plugins">
          <span >All plugins enabled</span>
          <el-switch class="right"
              v-model="value2"
              active-color="#5BC88D"
              inactive-color="#C63040">
          </el-switch>

        </div>
    </el-aside>
    
    <el-container>
        <el-main>
        <router-view></router-view>
        </el-main>
    </el-container>
    </el-container>
    
</template>
<style>
  .all-plugins{
    padding: 0 26px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .logo{
    padding: 32px 0 32px 32px
  }
  .el-menu-item.is-active{
    background: #fff !important;
    border-left: 4px solid rgb(198, 48, 64)
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(360deg, rgba(91, 200, 141, 0.6) 0%, rgba(255, 255, 255, 0) 9.51%), #F1F1F1;
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      return {
        value2:false,
        image: require('../static/images/DataGuard.png'),
      }
    },
    method:{
    }
  };
</script>