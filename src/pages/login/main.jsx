import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Button} from 'antd';
import loginRecevice from '../../model/action'
import './css/login';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    login() {
        this.props.login({
            isLogin: 1,
            userName: 'walker'
        });
    }

    render() {
        const {userName} = this.props.stateMap.login;
        return (
            <div>
                <h2 className="login-title">{userName || '未知'}</h2>
                <Button type="primary" onClick={() => {this.login()}}>确认</Button>
            </div>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func,
    stateMap: PropTypes.object
};

const mapStateToProps = (state) => ({
    stateMap: state.reducer
});

const mapDispatchToProps = (disaptch) => ({
    login(opt) {
        // loginRecevice.loginRecevice('loginIn', opt);
        disaptch(loginRecevice.loginRecevice('loginIn', opt));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
