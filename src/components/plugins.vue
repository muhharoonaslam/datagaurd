<template>
    <el-row :gutter="12">
    <el-col :span="8">
        <el-card shadow="hover" class="box-card" aria-disabled="">
            <div >
                <span>Plugin 1 </span>
                <el-switch class="right"
                v-model="value2"
                active-color="#5BC88D"
                inactive-color="#C63040">
                </el-switch>
                <div class="flex-end">
                    <h6 class="text" >{{value2 ? 'Allowed':'Not Allowed'}}</h6>
                </div>
            </div>
            <el-row :gutter="12">
                <el-col :span="19">
                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus mattis magna id suscipit.</p>
                </el-col>
            </el-row>
        </el-card>
    </el-col>
    <el-col :span="8">
        <el-card shadow="hover" class="box-card">
            <div >
                <span>Plugin 1 </span>
                <el-switch class="right"
                v-model="value2"
                active-color="#5BC88D"
                inactive-color="#C63040">
                </el-switch>
                <div class="flex-end">
                    <h6 class="text" >{{value2 ? 'Allowed':'Not Allowed'}}</h6>
                </div>
            </div>
            <el-row :gutter="12">
                <el-col :span="19">
                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus mattis magna id suscipit.</p>
                </el-col>
            </el-row>        
        </el-card>
    </el-col>
    <el-col :span="8">
        <el-card shadow="hover" class="box-card">
            <div >
                <span>Plugin 1 </span>
                <el-switch class="right"
                v-model="value2"
                active-color="#5BC88D"
                inactive-color="#C63040">
                </el-switch>
                <div class="flex-end">
                    <h6 class="text" >{{value2 ? 'Allowed':'Not Allowed'}}</h6>
                </div>
            </div>
            <el-row :gutter="12">
                <el-col :span="19">
                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus mattis magna id suscipit.</p>
                </el-col>
            </el-row>
        </el-card>
    </el-col>
    </el-row>
</template>

<script>
// @ is an alias to /src

  export default {
    data() {
      return {
          value2:false
      }
    },
    method:{
    }
  };
</script>
<style scoped>
    .el-card{
        border-radius: 8px;
        
    }
    .el-card__body{
        padding: 12px;
    }
    .flex-end{
        display: flex;
        width: 100%;
        justify-content: flex-end;
        margin-bottom: 10px;
    }
    .text{
        font-size: 12px !important;
        margin: 0;
        padding: 0;
    }
    .right{
        float: right; padding: 3px 0
    }
</style>