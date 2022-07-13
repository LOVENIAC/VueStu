<template>
    <div>
        <h1>{{name}}</h1>
        <h1>sex:{{sex}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'StudentItem',
        data(){
            return{
                name:'LOVENIAC',
                sex:'male'
            }
        }
    }
</script>