

<!--
 * @Description: This is a vue-index file
 * @Author: JeanneWu
 * @Date: 2020-04-02 15:39:34
 -->
<template>
  <div class="wrapper">
      <img src="src/img/index.png" alt="">
    <div class="welcome">This is a chrome plugin!</div>
    <router-link :to="{name:'category',params:{username:'jspang',id:'555'}}">
        <div class="start">let's start!</div>
    </router-link>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
    data(){
        return {

        }
    }
};
</script>
<style lang="less">
.wrapper{
    background: rgba(0,0,0,0.8);
    color: white;
    width: 500px;
    height: 500px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 70%;
        padding-bottom: 20px;
    }
    a{
        color: white;
        // text-decoration:none;
    }
}
</style>


