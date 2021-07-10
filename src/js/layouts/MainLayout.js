import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const MainLayout = props => {
  const { children } = props;

  return <Box pad={{ horizontal: 'medium' }}>{children}</Box>;
};

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
