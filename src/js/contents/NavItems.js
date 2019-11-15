import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box } from 'grommet';

const NavItems = () => {
  return (
    <Box direction="row" gap="large">
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/hello-world">
        <Button>Hello World</Button>
      </Link>
      <Link to="/list">
        <Button>List View</Button>
      </Link>
      <Link to="/dashboard">
        <Button>Dashboard</Button>
      </Link>
    </Box>
  );
};

export default NavItems;
