/**
 * @file 布局组件
 * @Author wangjie19
 * @Date 2018-09-14 11:38:20
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-09-14 16:40:00
 */

import React, {PureComponent} from 'react';
import {Layout} from 'antd';
import RouteWithSubRoutes from '../components/RouteWithSubRoutes';
import PropTypes from 'prop-types';

const {Content, Header, Footer} = Layout;

class Frame extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const childRoutes = this.props.childRoutes;
        return (
            <div>
                <Header></Header>
                <Content>
                    {
                        childRoutes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route}></RouteWithSubRoutes>
                        ))
                    }
                </Content>
                <Footer></Footer>
            </div>
        );
    }
}

Frame.propTypes = {
    childRoutes: PropTypes.array
};

export default Frame;
