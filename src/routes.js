/**
 * @file 路由配置
 * @Author wangjie19
 * @Date 2018-06-21 17:39:45
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-09-14 16:54:58
 */

import Layout from './layouts/Layout';
import Login from './pages/login/main';
import Home from './pages/home/main';

const routes = [
    {
        path: '/',
        component: Layout,
        indexRoute: {
            component: Home
        },
        childRoutes: [
            {
                path: '/home',
                component: Home,
                exact: true
            }
        ],
        exact: true
    },
    {
        path: '/login',
        component: Login,
        exact: true
    }
];

export default routes;
