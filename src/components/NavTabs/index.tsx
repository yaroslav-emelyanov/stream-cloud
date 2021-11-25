import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { Tab, Tabs } from '@mui/material';

interface INavTab {
  to: string;
  label: string;
}

interface INavTabsProps {
  list: INavTab[];
}

const NavTabs: React.FC<INavTabsProps> = ({ list }) => {
  const location = useLocation();

  return (
    <Tabs style={{ flex: 1 }} value={location.pathname} centered>
      {list.map((item) => (
        <Tab
          label={item.label}
          value={item.to}
          to={item.to}
          component={NavLink}
          key={item.to}
        />
      ))}
    </Tabs>
  );
};

export default NavTabs;
