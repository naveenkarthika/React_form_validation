import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRouter = ({ component,...rest }) => {
    let RenderComponents = component;
    // console.log(component);
    // console.log(rest);
    return (
        <Route
            {...rest}
            render={
                props => {
                    return false ? (
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