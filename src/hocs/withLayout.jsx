import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withLayout = (WrappedComponent) => {
  return ({ Component, isPrivate, ...rest }) => {
    const { userLogin } = useSelector((state) => state.authReducer);

    const content = (
      <Route
        {...rest}
        render={(routeProps) => (
          <WrappedComponent>
            <Component {...routeProps} />
          </WrappedComponent>
        )}
      />
    );
    if (isPrivate) {
      if (!userLogin.id) {
        return <Redirect to="/login" />;
      }
      return content;
    }
    return content;
  };
};
export default withLayout;
