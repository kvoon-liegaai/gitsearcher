<template>
<div>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
        <input type="text" v-model="keyword" placeholder="enter the name you search"/>&nbsp;
        <button @click="searchKeyword">Search</button>
    </div>
    </section>
</div>
</template>

<script>

import axios from "axios";

export default {
    name:"Search",
    data(){
        return {
            keyword:""
        }
    },
    methods:{
        searchKeyword(){
            this.$bus.$emit("getUsers",{isFrist:false,isLoading:true,users:[],errMsg:""});
            axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                response => {
                    this.$bus.$emit("getUsers",{
                        isFrist:false,
                        isLoading:false,
                        users:response.data.items,
                        errMsg:""
                    })
                },
                error => {
                    this.$bus.$emit("getUsers",{
                        isFrist:false,
                        isLoading:false,
                        users:[],
                        errMsg:error
                    })
                }
            );
        }
    }
    
}
</script>

<style>

</style>