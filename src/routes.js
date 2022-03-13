
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import AddUser from './components/users/AddUser.vue'
import UsersList from './components/users/UsersList.vue'
import ShowUsers from './components/users/ShowUsers.vue'
import EditUser from './components/users/EditUser.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import Products from './components/Products.vue'
import Reservation from './components/Reservation.vue'




//importojme gjithe ato komponenta qe do i regjistrojme si routes



export const routes = [
    { path: '/', name:'home', component:Home},
    { path: '/about', name:'about', component:About},
    { path: '/contact', name:'contact', component:Contact},
    { path: '/users-list', name:'UsersList', component:UsersList},
    { path: '/show-user/:id', name:'ShowUsers', component:ShowUsers},
    { path: '/edit-user/:id', name:'EditUser', component:EditUser},
    { path: '/add-user', name:'AddUser', component: AddUser},
    { path: '/login', name:'Login', component: Login},
    { path: '/register', name:'Register', component: Register},
    { path: '/products', name:'Products', component: Products},
    { path: '/reservations', name:'Reservation', component: Reservation}
]