
<template>
  <div>
      1
     <div style="width:500px;height:500px" ref="chart"></div>
      <users v-bind:users="users" :age="age" v-on:titleChanged="updateTitle"></users>
      <div>{{fullName}}</div>
      <div>这个是路由传来的值{{username}}</div>
        <button @click="setNameFun">click</button>
  </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";
import { IndexList, IndexSection, Cell } from "mint-ui";
import Users from './children1.vue'

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Cell.name, Cell);

export default {
  data() {
    return {
      clientHeight: '',
      clientWidth: '',
      users:['Harmony', 'Jeanne'],
      age:25,
      title: "传递的是一个值",
      // username: ''
    };
  },
  mounted() {
    // fetch('/api').then((res) => {
    //   console.log(res);
    // })
    // axios.get("/api").then(res => {
    //     console.log(11);
    // });
    axios.get("/api/catagory").then(res => {
      this.initCharts(res.data);
    });
    this.clientHeight =   '500';
    this.clientWidth  =   '500';
  },
  computed: {
    fullName(){
      return this.age + this.title;
    },
    username(){
      console.log(this.$route.params.username,'id == ')
      return this.$route.params.username;
    }
  },
  watch: {

    //  clientHeight: function () {
    //     this.changeFixed(this.clientHeight, this.clientWidth)
    //   }
  },
  methods: {
    setNameFun(){
      this.age = 26;
      this.title = 'change';
    },
    updateTitle(e){
      this.title = e;
    },
    changeFixed(clientHeight, clientWidth){
      this.$refs.chart.style.height = clientHeight+'px';
      this.$refs.chart.style.width = clientWidth+'px';
    },
    initCharts(data) {
      let myChart = this.$echarts.init(this.$refs.chart);
      // let mySecondChart = this.$echarts.init(this.$refs.chart2);
      let baseOption = {
        backgroundColor: "#2c343c",

        title: {
          text: "Fintech Categories Distribution",
          left: "center",
          top: 40,
          textStyle: {
            color: "#ccc"
          }
        },

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}"
        },

        visualMap: {
          show: false,
          min: 50,
          max: 500,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "The quantity of project",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: data.sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "rgba(255, 255, 255, 0.3)"
            },
            labelLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)"
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: "#c23531",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }
        ]
      };

      let option = { baseOption};
      // console.log(option);
      // console.log(this.$refs.chart);
      // 绘制图表
      myChart.setOption(option);

    }
  },
  components:{
    "users": Users
  }
};
</script>
<style lang="less">
html{
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


