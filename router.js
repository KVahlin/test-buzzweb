import Main from './src/components/Main.vue'
import Edit from './src/components/Edit.vue'

export default {
    routes:[
      { path:'/',component: Main},
      { path:'/edit/:id',component: Edit, props: true},
    ]
}