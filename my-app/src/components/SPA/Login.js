import React from "react";
import LoginForm from "./LoginForm"
import LoginFormHook from "./LoginFormHook"
import { connect } from 'react-redux';
import { login } from "../../FakeRedux/authReducer";
import { Navigate } from "react-router-dom";


class Login extends React.Component {

    // Login = (data) => {
    //     console.log(this.props);
    //     debugger
    //     this.props.login(data.email, data.password, data.rememberMe)
    // }
    render() {
        // debugger

        return <>

            {/* <LoginForm onSubmit={this.Login} {...this.props} /> */}
            <LoginFormHook onSubmit={this.props.login} {...this.props} authError={this.props.authError} />
        </>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    authError: state.auth.authError
})

export default connect(mapStateToProps, { login })(Login)