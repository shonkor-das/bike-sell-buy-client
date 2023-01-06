import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {

    const { register,formState: { errors }, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext);
    const [loginError, setLoginErron] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    if(token){
        navigate(from, { replace: true });
    }
    
    const handleLogin = data =>{
        console.log(data);
        setLoginErron('');
        signIn(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email);

        })
        .catch(error => {
            console.log(error.message)
            setLoginErron(error.message);
        });
    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-center mb-2 font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span> </label>
                        <input type="text" 
                        {...register("email", {
                            required: "Email Address is required"
                        })} 
                        className="input input-bordered w-full" />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" 
                        {...register("password",{
                            required: "Password is required",
                            minLength: {value: 6, message: "Password must be 6 characters or longer"}
                        })} 
                        className="input input-bordered w-full" />
                        <label className="label"><span className="label-text">Forget Password</span></label>
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                    </div>
                    <input type="submit" value="login" className='btn btn-accent text-white w-full' />
                    <div>
                        {loginError && <p className='text-error'>{loginError}</p>}
                    </div>
                </form>
                <p className=''>New to Bikes Sell-Buy ? <Link className='text-success' to='/signup'>Create New Account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>continue with google</button>
            </div>
        </div>
    );
};

export default Login;