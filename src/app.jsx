/**
 * @file 程序主入口脚本
 * @Author wangjie19
 * @Date 2018-06-21 17:32:34
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-09-13 16:18:44
 */

import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import {Provider} from 'react-redux';
import routes from './routes';
import store from './model/store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router basename={'/'}>
                    <div>
                        {
                            routes.map((route, index) => {
                                return (<Route key={index} path={route.path} component={route.component} exact={route.exact}/>);
                            })
                        }
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
