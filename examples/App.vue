<template>
  <div>
    <page-bar
        :total="pageParams.total"
        :page-size="pageParams.pageSize"
        :current.sync="pageParams.current"
        :showNumber="pageParams.showNumber"
        @changePage="changePage"
    ></page-bar> 
  </div>
</template>

<style lang="less">
</style>

<script>

import pageBar from "../src/index.vue";

export default {
    data(){
        return {
            pageParams: {
                total: 199,
                pageSize: 10,
                current: 2,
                showNumber: 8
            }
        }
    },
    mounted(){
        
    },
    methods:{
        changePage(pageNum){
            console.log(pageNum);
        },
    },
    components: {
        pageBar
    }
}
</script>

