import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const signIn = () => {
        signInUsingGoogle()
    }
    return (
        <div id='login'>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} className='btn btn-warning'>Google sign In</button>
        </div>
    );
};

export default Login;