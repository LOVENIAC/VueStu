import VueRouter from "vue-router";
import myAbout from '../pages/About'
import myHome from '../pages/Home'
import myDetail from '../pages/Detail'
// import myMovies from '../pages/Movies'
// import myHobby from '../pages/Hobby'

export default new VueRouter({
  routes:[
    {
      path:'/about', 
      component:myAbout
    },
    {
      path:'/home',
      component:myHome,
      children:[
        {
          name:'detail',
          // path:'detail/:id/:title', 
          path:'detail',
          component:myDetail,

          // 第一种props为对象，通过key-value的方式传递
          // props:{id:"1",title:'props Test'}

          // 第二种props为boolean，把路由收到的所有params参数传递给组件
          // props:true

          // 第三种props为function，以key-value方式返回给组件
          props({query}){
            return {
              id:query.id,
              title:query.title
            }
          }
        }
      ]
    }
  ]
})