import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const Sidebar = props => {
  const { children } = props;
  return (
    <Box
      direction="column"
      background="light-4"
      fill="vertical"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      {children}
    </Box>
  );
};

Sidebar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};

export default Sidebar;
