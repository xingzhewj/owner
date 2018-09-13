/**
 * @file 路由配置
 * @Author wangjie19
 * @Date 2018-06-21 17:39:45
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-06-22 16:07:47
 */

import Login from './pages/login/main';

const Home = require.ensure([], require => require('./pages/home/main'), 'home');
// const Login = require.ensure([], require => require('./pages/login/main'), 'login');

const routes = [
    {
        path: '/home',
        getComponents: Home,
        exact: true
    },
    {
        path: '/login',
        component: Login,
        exact: true
    }
];

export default routes;
