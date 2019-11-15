import React from 'react';
import { Box } from 'grommet';
import {
  Apps,
  Chat,
  Cli,
  Clock,
  Configure,
  Database,
  LineChart,
  StatusInfo,
  StatusUnknown,
  UserSettings,
} from 'grommet-icons';

const SidebarContent = () => {
  return (
    <Box>
      <Box>
        <UserSettings />
      </Box>
      <Box gap="medium" margin={{ vertical: 'xlarge' }}>
        <StatusInfo />
        <Clock />
        <Apps />
        <Database />
        <LineChart />
        <Cli />
        <Configure />
      </Box>
      <Box gap="medium" margin={{ vertical: 'xlarge' }}>
        <Chat />
        <StatusUnknown />
      </Box>
    </Box>
  );
};

export default SidebarContent;
