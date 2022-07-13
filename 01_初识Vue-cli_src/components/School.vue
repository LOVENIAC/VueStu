<template>
    <!-- 编写组件结构 -->
    <div class="school-box">
        <h2>{{name}}</h2>
        <h2>{{hobby}}</h2>
        <button @click="showX">click me</button>
    </div>
</template>

<script>
    // 组件交互相关的代码
    export default {
        name:'SchoolItem',
        data(){
            return{
                name:'Alex',
                hobby:['Vue','React']
            }
        },
        methods:{
            showX(){
                console.log('I am showing...');
            }
        }
    }
</script>

<style>
    /* 组件样式代码 */
    .school-box{
        background-color: beige;
    }
</style>