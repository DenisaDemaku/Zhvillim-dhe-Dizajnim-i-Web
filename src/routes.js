
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'




//importojme gjithe ato komponenta qe do i regjistrojme si routes



export const routes = [
    { path: '/', name:'home', component:Home},
    { path: '/about', name:'about', component:About},
    { path: '/contact', name:'contact', component:Contact},
    { path: '/edit-user/:id', name:'EditUser', component:EditUser},
    { path: '/login', name:'Login', component: Login},
    { path: '/register', name:'Register', component: Register}
]