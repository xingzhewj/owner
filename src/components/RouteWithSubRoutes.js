/**
 * @file 子组件路由传递组件
 * @Author wangjie19
 * @Date 2018-09-14 16:21:19
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-09-14 16:42:14
 */

import React from 'react';
import {Route} from 'react-router-dom';

const RouteWithSubRoutes = (route) => (
    <Route
        path={route.path}
        render={props => (
            <route.component {...props} childRoutes={route.childRoutes}/>
        )}
    ></Route>
);

export default RouteWithSubRoutes;
