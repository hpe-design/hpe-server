import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Box, Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';

import { MainLayout, MainMenu, Sidebar } from './layouts';
import { NavItems, SidebarContent } from './contents';
import { Dashboard, HelloWorld, Home, ListView } from './routes';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <Router>
      <Grommet theme={hpe}>
        <Box direction="row" fill>
          {showSidebar ? (
            <Sidebar>
              <SidebarContent />
            </Sidebar>
          ) : null}
          <Box fill="horizontal">
            <MainMenu>
              <NavItems />
            </MainMenu>
            <MainLayout>
              <>
                <Route exact path="/" component={Home} />
                <Route exact path="/hello-world" component={HelloWorld} />
                <Route exact path="/list" component={ListView} />
                <Route exact path="/dashboard" component={Dashboard} />
              </>
            </MainLayout>
          </Box>
        </Box>
      </Grommet>
    </Router>
  );
};

export default App;
