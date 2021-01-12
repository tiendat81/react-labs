import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect, Route } from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.any.isRequired,
};

function PrivateRoute({ path, component }) {
  const PrivateComponent = component;
  return (
    <Route
      path={path}
      render={(props) => {
        // checklogin
        const isLogging = !!localStorage.getItem('access_token');
        if (!isLogging) {
          return (
            <Box>
              <Typography variant="h2">You are not authrized!</Typography>
              <Link to="/">
                <Button variant="contained" color="primary">
                  Back home
                </Button>
              </Link>
            </Box>
          );
        }
        return <PrivateComponent {...props} />;
      }}
    />
  );
}

export default PrivateRoute;
