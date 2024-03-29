import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/login.vue';
import UserLogin from '../views/userLogin.vue';
import Product from '../views/product.vue';
import EqCoinPush from '../views/eqCoinPush.vue';
import Payment from '../views/payment.vue';
import Order from '../views/order.vue';
import Finish from '../views/finish.vue';
import CoinChage from '../views/coinChage.vue';
import CardChage from '../views/cardChage.vue';
import Examine from '../views/examine.vue';
import innerLayout from '../layout/innerLayout.vue';
import UserHistory from '../views/userHistory.vue';
import EqSetup from '../views/eqSetup.vue';
import EqSelect from '../views/eqSelect.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/eqSetup',
    name: 'eqSetup',
    component: EqSetup,
  },
  {
    path:'',
    name:'innerLayout',
    component: innerLayout,
    children:[
      {
        path: '/about',
        name: 'About',
        component: About,
      },
      {
        path: '/userLogin',
        name: 'UserLogin',
        component: UserLogin,
      },
      {
        path: '/eqSelect',
        name: 'EqSelect',
        component: EqSelect,
      },
      {
        path: '/product',
        name: 'Product',
        component: Product,
      },
      {
        path: '/eqCoinPush',
        name: 'EqCoinPush',
        component: EqCoinPush,
      },
      {
        path: '/order',
        name: 'Order',
        component: Order,
      },
      {
        path: '/finish',
        name: 'Finish',
        component: Finish,
      },
      {
        path: '/payment',
        name: 'Payment',
        component: Payment,
      },
      {
        path: '/coinChage',
        name: 'CoinChage',
        component: CoinChage,
      },
      {
        path: '/cardChage',
        name: 'CardChage',
        component: CardChage,
      },
      {
        path:'/examine',
        name:'Examine',
        component: Examine,
      },
      {
        path:'/userHistory',
        name:'userHistory',
        component: UserHistory,
      }
    ]
  }
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
