import React, { useCallback } from 'react';

import { IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';

interface IMenu {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface IMenuProps {
  icon: React.ReactNode;
  list: IMenu[];
}

const IconButtonMenu: React.FC<IMenuProps> = ({ icon, list }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget),
    []
  );

  const handleClose = useCallback(() => setAnchorEl(null), []);

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton onClick={handleClick}>{icon}</IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        {list.map((item) => (
          <MenuItem
            onClick={item.onClick}
            disabled={item.disabled}
            key={item.label}
          >
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default IconButtonMenu;
