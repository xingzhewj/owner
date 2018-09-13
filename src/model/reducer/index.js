/**
 * @file redux得reducer入口脚本
 * @Author wangjie19
 * @Date 2018-09-13 15:42:03
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-09-13 16:24:35
 */

import {combineReducers} from 'redux';
import * as login from './login';

export default combineReducers({
    ...login
});
