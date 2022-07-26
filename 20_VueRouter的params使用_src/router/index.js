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
          path:'detail/:id/:title', 
          component:myDetail,
        }
      ]
    }
  ]
})