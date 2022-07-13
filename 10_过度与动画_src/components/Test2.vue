<template>
    <div>
        <button @click="isShow = !isShow">show/hidden</button>
        <!-- appear是否首次渲染完毕激活 name动画名 -->
        <transition-group name="hello" appear>
            <h1 v-show="isShow" key="1">Hello World!</h1>
            <h1 v-show="!isShow" key="2">Hello GaoQi!</h1>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name: 'testModel2',
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
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
        opacity: 0;
    }
    .hell-enter-to,.hello-leave{
        opacity: 1;
        transform: translateX(0);
    }
    .hello-enter-active,.hello-leave-active{
        transition: 0.5s linear;
    }
</style>