import Main from './src/components/Main.vue'
import Edit from './src/components/Edit.vue'
import View from './src/components/View.vue'

export default {
    routes:[
      { path:'/',component: Main},
      { path:'/edit',component: Edit},
      { path:'/view',component: View},
    ]
}