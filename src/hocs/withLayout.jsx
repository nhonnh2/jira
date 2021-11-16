import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router";

const withLayout = (WrappedComponent) => {
  return ({ Component, ...rest }) => {
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
    return content;
  };
};
export default withLayout;
