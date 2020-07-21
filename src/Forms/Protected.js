import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRouter = ({ component,...rest }) => {
    let RenderComponents = component;
    // console.log(component);
    // console.log(rest);
    console.log(RenderComponents);
    let hashToken = JSON.parse(localStorage.getItem('auth'));
    return (
        <Route
            {...rest}
            render={
                props => {
                    return  hashToken !== null ? (
                        <RenderComponents {...props} />
                    ) : (
                            <Redirect to={{
                                pathname: '/login'
                            }}
                            />
                        )
                }
            }
        />
    )
}

export default ProtectedRouter;