import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'
const Layout = () => import('@/pages/layout')
const Discovery = () => import('@/pages/discovery')
const Playlists = () => import('@/pages/playlists')



Vue.use(VueRouter)

const routes = [
    {path:'/', redirect:'/layout/discovery'},
    // {path:'/home', component: Home},
    {
        path:'/layout', 
        name:'layout', 
        component: Layout,
        children: [
            {
                path: 'discovery', 
                name: 'discovery', 
                component: Discovery
            },
            {
                path: 'playlists',
                name: 'playlists',
                component: Playlists
            }
        ]
    },
    
]

const router = new VueRouter({
    routes
})

export default router