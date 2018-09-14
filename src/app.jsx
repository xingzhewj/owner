/**
 * @file 程序主入口脚本
 * @Author wangjie19
 * @Date 2018-06-21 17:32:34
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-09-14 16:52:36
 */

import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import {Provider} from 'react-redux';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';
import routes from './routes';
import store from './model/store';

class App extends Component {
    render() {
        const routerConponents = routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route}></RouteWithSubRoutes>
        ));
        return (
            <Provider store={store}>
                <Router basename={'/'}>
                    <div>
                        <Switch>
                            {routerConponents}
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
