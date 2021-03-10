import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import loginInfo from './authdata';
import './login.css';

const Login = () => {
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        if(data.password.toLowerCase() === "admin" || data.password.toLowerCase() === "user"){
            history.push(`/home/${data.password.toLowerCase()}`);
        }
        else{
            alert("access denied");
        }
    }
    console.log(loginInfo.user1.Password);
    return (
        <div className="login container text-center mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-3 p-2" placeholder="Name" name="name" ref={register} /> <br/>
                <input className="mb-3 p-2" placeholder="Password" name="password" ref={register} /> <br/>
                <input className="mb-3 p-2" type="submit" />
            </form>
        </div>
    );
};

export default Login;