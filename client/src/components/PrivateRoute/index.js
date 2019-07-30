import React from 'react';
import {
    Route,
    Redirect,
  } from 'react-router-dom'

/**
 * PrivateRoute() used to make routes private
 * @param {gotUser} boolean used as flag to give 
 * access to component
 */
function PrivateRoute ({ component: Component,  gotUser, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
            gotUser ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/ShelterLogin',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )
  }

  export default PrivateRoute;