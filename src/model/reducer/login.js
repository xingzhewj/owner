/**
 * @file 登录reducer
 * @Author wangjie19
 * @Date 2018-09-13 15:52:55
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-09-13 16:10:44
 */

import {LOGIN_IN} from '../action/login';

const initialState = {
    isLogin: 0,
    userName: ''
};

export const login = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case 'LOGIN_IN':
            return Object.assign(
                {},
                state,
                {
                    isLogin: payload.isLogin,
                    userName: payload.userName
                }
            );
        default:
            return state;
    }
};
