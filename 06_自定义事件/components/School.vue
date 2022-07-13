<template>
  <div class="school">
      <h2>{{college}}</h2>
      <button @click="sendName">触发自定义事件</button>
      <button @click="unbind">解绑自定义时间</button>
      <button @click="death">销毁school组件</button>
  </div>
</template>

<script>
export default {
    name:'SchoolItem',
    props:{
        college:{
            default: 'Vue college',
            type: String
        }
    },
    methods:{
        sendName(){
            this.$emit('eniac',this.college);
        },
        unbind(){
            console.log('事件被解绑了');
            this.$off('eniac');
        },
        death(){
            this.$destroy();
        }
    }
}
</script>

<style>
    .school{
        background-color: antiquewhite;
    }
</style>