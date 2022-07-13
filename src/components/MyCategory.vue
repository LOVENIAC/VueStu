<template>
  <div class="myCategory">
    <h3>{{title}}</h3>
      <slot name="default"></slot>
      <slot name="movie"></slot>
  </div>
</template>

<script>
export default {
  name: 'MyCategory3',
  props:[
    'title'
  ]
}
</script>

<style lang='less'>
  .myCategory{
    padding: 10px;
    width: 200px;
    height: 300px;
    background-color: aquamarine;
    h3{
      text-align: center;
    }
    ul{
      margin-top: 20px;
      list-style: none;
      li{
        font-size: 20px;
        padding:5px 0;
      }
    }
  }
</style>