import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isAuthenticated} from './index'

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => isAuthenticated() ? (
            // props means components passed down to this private route component
            <Component {...props}/>
    ) : (
        <Redirect to={{pathname: "/signin", state: {from: props.location}}} />
        
    )}/>
)

export default PrivateRoute