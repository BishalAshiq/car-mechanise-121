import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest}) => {
    const { user, isLoading } = useAuth();
    if(isLoading){
        return <Spinner animation="border" variant="danger" />
    }
    // console.log(user);
    return (
        <Route
        {...rest}
         render={ ({ location }) => user.email? children : <Redirect
         to={{
             pathname: "/Login",
             state: { from: location }
         }}
         />
        }
        >
        </Route>
    );
};

export default PrivateRoute;