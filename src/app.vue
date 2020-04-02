

<template>
  <div>
    <router-view>
   </router-view>
  </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";
import { IndexList, IndexSection, Cell } from "mint-ui";
import Users from "./components/children1.vue";

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Cell.name, Cell);

export default {
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {},
  components: {}
};
</script>
<style lang="less">
html {
  width: 500px;
  height: 500px;
}
body {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}
</style>


