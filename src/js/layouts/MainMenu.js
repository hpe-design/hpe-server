import React from 'react';
import { Box } from 'grommet';

const MainMenu = props => {
  const { children } = props;

  return (
    <Box
      direction="row"
      background="light-1"
      fill="horizontal"
      gap="large"
      pad={{ horizontal: 'medium', vertical: 'medium' }}
    >
      {children}
    </Box>
  );
};

export default MainMenu;
