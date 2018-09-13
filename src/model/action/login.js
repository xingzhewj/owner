/**
 * @file 登录action
 * @Author wangjie19
 * @Date 2018-09-13 15:32:39
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-09-13 15:39:01
 */

export const LOGIN_IN = 'LOGIN_IN';

export function loginIn(json) {
    return {
        type: LOGIN_IN,
        payload: json
    };
}

const doc = {
    loginIn
};

export function loginRecevice(sub, json) {
    return doc[sub](json);
}
