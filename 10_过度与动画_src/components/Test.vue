<template>
  <div>
      <button @click="isShow = !isShow">show/hidden</button>
      <!-- appear是否首次渲染完毕激活 name动画名 -->
      <transition name="hello" appear>
          <h1 v-show="isShow">Hello World!</h1>
      </transition>
  </div>
</template>

<script>
export default {
    name: 'testModel',
    data(){
        return {
            isShow:true,
            testStatus:''
        }
    },
    methods:{
    }
}
</script>

<style lang='less' scoped>
    h1{
        background-color: orange;
        width: 250px;
        border-radius: 10px;
        padding: 10px;
    }

    // v是默认名称
    // .v-enter-active{
    //     animation: testModel 1s;
    // }
    
    .hello-enter-active{
        animation: testModel 1s linear;
    }
    .hello-leave-active{
        animation: testModel 1s linear reverse;
    }

    @keyframes testModel {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0);
        }
    }
</style>