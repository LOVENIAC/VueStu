<template>
  <div id="app">
    <h2>{{schoolName}}</h2>
    <!-- 通过props传递函数 -->
    <StudentItem :getStudentMsg="getStudentMsg"></StudentItem>
    <!-- 通过@或v-on绑定自定义事件 -->
    <!-- <SchoolItem college="Suz" @eniac="getSchoolName"></SchoolItem> -->
    <!-- 通过ref绑定自定义事件 -->
    <!-- 此时绑定 @click事件需要加上修饰符@click.native -->
    <SchoolItem ref="school"></SchoolItem>
  </div>
</template>

<script>
import StudentItem from './components/Student.vue'
import SchoolItem from './components/School.vue'

export default {
    name:'App',
    data(){
      return{
        schoolName: 'Yanc college'
      }
    },
    components:{StudentItem,SchoolItem},
    methods:{
      getStudentMsg(value){
        console.log('App收到了',value);
      },
      getSchoolName(schoolName,...params){
        console.log('eniac事件被触发了',schoolName,params);
        this.schoolName = schoolName;
      }
    },
    mounted(){
      this.$refs.school.$on('eniac',this.getSchoolName);

      // 如果以下方式可能会出现this指向的问题
      // 可以通过称修改成箭头函数的方式
      // this.$refs.school.$on('eniac',function(schoolName,...params){
      //   // 此时this指向绑定的vc实例对象
      //   console.log(this);
      //   console.log(schoolName,params);
      // })
    }
}
</script>

<style>

</style>