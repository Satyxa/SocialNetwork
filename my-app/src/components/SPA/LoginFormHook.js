import './Login.css';
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
let LoginFormHook = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' })
    // console.log(errors);
    const onSubmit = (data) => {

        console.log(data);
        props.login(data.email, data.password, data.rememberMe)
        //  { email: 'satyan20003@gmail.com', password: 'aoe', }
    }
    const limit = 5;
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return <div className='login'>
        <div className='login-box'>
            <form onSubmit={handleSubmit(onSubmit)}

                className='login-form-box'>
                <div>{errors.password ? errors.password.message : ""}
                    {props.authError && 'Неправильный Email или Пароль'}</div>
                <input
                    {...register("email", {
                        required: "Это поле обязательно",
                    })}
                    className={props.authError ? 'login-item error' : 'login-item'}
                    name="email"
                    placeholder="email"
                    type="email" />
                {errors.email ? errors.email.message : ""}
                <input
                    {...register("password", {
                        required: "Это поле обязательно",
                        minLength: { value: limit, message: `Минимум ${limit} знаков` },
                    })}

                    className={props.authError ? 'login-item error' : 'login-item'}
                    name="password"
                    placeholder="password"
                    type='password' />
                <div>
                    <input
                        className='login-checkbox'
                        name='rememberMe'
                        type='checkbox' />rememberMe
                </div>
                <button
                    className='login-button'
                >Submit</button>
            </form>
        </div>
    </div>
}


export default LoginFormHook