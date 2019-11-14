import React from 'react';
import { Box, Grommet, Heading, Paragraph } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { Header } from 'aries-core';

const App = () => {
  return (
    <Grommet theme={hpe}>
      <Box>
        <Header />
        <Heading level="1">Hello HPExs</Heading>
        <Paragraph>Welcome to HPE Server -- woot woot</Paragraph>
      </Box>
    </Grommet>
  );
};

export default App;
