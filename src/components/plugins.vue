<template>
    <el-row type="flex" align="stretch" :gutter="20" >
    <template v-for="(plugin,key) in plugins">
        <el-col :xs="24" :sm="24" :md="8" :lg="8"  :key="key">
                <el-card shadow="hover" :class="checkdisabled(plugin.title) ?'box-card disabled' :'box-card '" aria-disabled="">
                    <div >
                        <span :class="checkdisabled(plugin.title) ? 'disabled ':''">{{plugin.title}} </span>
                        <el-switch class="right"
                        v-model="plugin.enabled"
                        active-color="#5BC88D"
                        inactive-color="#C63040"
                        :disabled="checkdisabled(plugin.title)"
                        @change="chnagStatus(plugin)">
                        </el-switch>
                        <div class="flex-end">
                            <h6 class="text" >{{plugin.enabled ? 'Allowed':'Blocked'}}</h6>
                        </div>
                    </div>
                    <el-row :gutter="12">
                        <el-col :span="19">
                            <p :class="checkdisabled(plugin.title) ? 'disabled text':'text'">{{plugin.description}}</p>
                        </el-col>
                    </el-row>
                </el-card>
        </el-col>
    </template>
    </el-row>
</template>

<script>
// @ is an alias to /src
import genMix from '../genericMixin.js'


  export default {
    mixins: [genMix.InitializeMixin],
    props:{
        disabledItem: {  type: Object, default: () => { return {} } },
    },
    data() {
      return {
          plugins:null,
      }
    },
    mounted:async function(){
        var plugins = (await this.request('plugins', null, null))
        this.plugins = plugins
        this.$store.dispatch('setState', {  payload:  [...plugins]  })
    },
    methods:{
        checkdisabled(title){ 
           return this.disabledItem.disabled.includes(title) 
        },
        chnagStatus :async function(body){
            var id = body.id
            var res =(await this.request(`plugins/${id}`, 'put',null, body))
            console.log('chnagStatus',res)
        }
    }
  };
</script>
<style >

    .el-col {
        margin-bottom: 20px;
    }
    .el-row {
        flex-wrap: wrap;
    }
    .el-card{
        border-radius: 8px;
        height: 100%;
    }
    .disabled{
        color: #9AA7B0 !important;
    }
    .el-card.disabled{
        border-color: #DCDCDC;
        height: 100%;
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