
import About from '@/components/About';
import Contact from '@/components/Contact';
import Home from '@/components/Home';
import AddUser from '@/components/users/AddUser.vue'
import UsersList from '@/components/users/UsersList.vue'
import ShowUsers from '@/components/users/ShowUsers.vue'
import EditUser from '@/components/users/EditUser.vue'
import Login from '@/components/auth/Login.vue'
import Register from '@/components/auth/Register.vue'
import Products from '@/components/Products.vue'
import Reservation from '@/components/Reservation.vue'
import myorders from '@/components/myorders.vue'

import VueRouter from 'vue-router';
import firebase from '@/Firebase.js';
import router from './index';

export default new VueRouter({
    routes: [
        { path: '/', name:'home', component:Home},
        { path: '/about', name:'about', component:About},
        { path: '/contact', name:'contact', component:Contact},
        { path: '/users-list', name:'UsersList', component:UsersList , 
            meta:{
                requiresAuth: true
            }
        },
        { path: '/show-user/:id', name:'ShowUsers', component:ShowUsers , 
            meta:{
                requiresAuth: true
            }
        },
        { path: '/edit-user/:id', name:'EditUser', component:EditUser , 
            meta:{
                requiresAuth: true
            }
        },
        { path: '/add-user', name:'AddUser', component: AddUser , 
            meta:{
                requiresAuth: true
            }
        },
        { path: '/login', name:'Login', component: Login},
        { path: '/register', name:'Register', component: Register},
        { path: '/products', name:'Products', component: Products, 
            meta:{
                requiresAuth: true
            }
        },
        { path: '/reservations', name:'Reservation', component: Reservation  , 
            meta:{
                requiresAuth: true
            }
        },
        { path: '/myorders', name:'myorders', component:myorders},
    ]
});

router.beforeEach(async (to, from, next)=>{
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if(requiresAuth && !await firebase.getCurrentUser()){
        next('Login');
    }else{
        next();
    }
});