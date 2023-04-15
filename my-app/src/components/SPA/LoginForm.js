import './Login.css';
import { Field, reduxForm } from 'redux-form';
import { required } from './../../utilits/validate'
let LoginForm = (props) => {
    // console.log(props);
    return <div className='login'>
        <div className='login-box'>
            <form onSubmit={props.handleSubmit} className='login-form-box'>
                <Field className='login-item' name="email" placeholder="email" component={'input'} type="email" validate={[required]} />
                <Field className='login-item' name="password" placeholder="password" component={'input'} type='password' />
                <div>
                    <Field className='login-checkbox' name="rememberMe" type="checkbox" component={'input'} />rememberMe
                </div>
                <button className='login-button' >Submit</button>
            </form>
        </div>
    </div>
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginForm