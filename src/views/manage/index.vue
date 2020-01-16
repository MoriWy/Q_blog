<template>
  <div style="width:100%;height: 100%;">
    <eHeader/>
    <amenu/>
    <router-view/>
  </div>
</template>

<script>
import eHeader from '../manage/module/header'
import amenu from "./module/menu";
export default {
    name: 'index',
    components:{eHeader,amenu},
    methods:{
        handleSelect(key,keypath){
            console.log(key,keypath)
        }
    }
    }
</script>

<style scoped>

</style>
