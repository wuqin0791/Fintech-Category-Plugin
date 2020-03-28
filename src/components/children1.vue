
<template>
  <div class="hello">
    <ul>
      <li v-for="(user,index) in users" :key="index">{{user}}</li>
      <li>{{age}}</li>
    </ul>
    <h1 @click="changeTitle">{{title}}</h1>
  </div>
</template>
<script>
export default {
    // 总结：父组件通过props向下传递数据给子组件。注：组件中的数据共有三种形式：data、props、computed
  name: 'HelloWorld',
  data(){
      return {
        title: '这是一个title'
      }
  },
  props:{
    users:{           //这个就是父组件中子标签自定义名字
      type:Array,
    //   required:true
    },
    age: {
        type: Number,

    }
  },
  methods: {
      changeTitle(){
          this.$emit("titleChanged", "子向父组件传值")
      }
  }
}
</script>


