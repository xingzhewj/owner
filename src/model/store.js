/**
 * @file redux的store脚本
 * @Author wangjie19
 * @Date 2018-09-13 15:26:48
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-09-13 16:56:22
 */

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {routerReducer} from 'react-router-redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import reduxLogger from 'redux-logger';
import reducer from './reducer';

function makeStore(preloadState = {}) {
    return createStore(
        combineReducers({
            reducer,
            routing: routerReducer
        }),
        preloadState,
        applyMiddleware(reduxThunk, reduxPromise, reduxLogger)
    );
}

export default makeStore();
