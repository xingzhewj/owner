import React, {Component} from 'react';
import {connect} from 'react-redux';
import './css/home';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>home页</h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    stateMap: state.reducer
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);