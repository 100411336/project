import Vue from "vue";
import VueRouter from "vue-router";
import home from "../components/home/home.vue";
import clothes from "../components/clothes/clothes.vue";
import dogfoods from "../components/dogfoods/dogfoods.vue";
import health from "../components/health/health.vue";
import snacktoys from "../components/snacktoys/snacktoys.vue";

Vue.use(VueRouter);
//路由器用来配置路由
export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/home'
    },

    {
      path:'/home',
      component:home
    },
    {
      path:'/clothes',
      component:clothes
    },
    {
      path:'/dogfoods',
      component:dogfoods
    },
    {
      path:'/health',
      component:health
    },
    {
      path:'/snacktoys',
      component:snacktoys
    }
  ]

})
