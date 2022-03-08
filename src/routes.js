
import About from './components/About';
import Contact from './components/Contact';

//importojme gjithe ato komponenta qe do i regjistrojme si routes

export const routes = [
    { path: '/about', name:'about', component:About},
    { path: '/contact', name:'contact', component:Contact}
]