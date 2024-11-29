import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Service from './components/Services.vue'
import Portfolio from './components/Portfolio.vue'
import Element from './components/Elements.vue'
import PortfolioDetails from './components/PortfolioDetails.vue'
import Blog from './components/Blog.vue'
import BlogDetails from './components/BlogDetails.vue'
import Contact from'./components/Contact.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',name:'Home',component:Home},
        {path:'/about',name:'About',component:About},
        {path:'/service',name:'Service',component:Service},
        {path:'/portfolio',name:'Portfolio',component:Portfolio},
        {path:'/element',name:'Element',component:Element},
        {path:'/portfolio-detail',name:'PortFolioDetail',component:PortfolioDetails},
        {path:'/blog',name:'Blog',component:Blog},
        {path:'/blog-detail',name:'BlogDetail',component:BlogDetails},
        {path:'/contact',name:'Contact',component:Contact}
    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app')


