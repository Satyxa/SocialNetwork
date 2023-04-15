
import React from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, getAuthUserData, logout } from './../../FakeRedux/authReducer'
class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props} logout={this.props.logout} />
        )
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { setAuthUserData, getAuthUserData, logout })(HeaderContainer)