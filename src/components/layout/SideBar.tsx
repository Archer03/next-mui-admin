import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import React, { useEffect, useState } from 'react';
import { ExpandMore } from '@mui/icons-material';
import { FormattedMessage } from 'react-intl';
import { useMatch, useNavigate } from 'react-router-dom';

export type MenuOptions = {
  url: string,
  icon: any,
  i18nKey: string,
  isPage?: boolean,
  childRoutes?: MenuOptions[]
}

type SideBarProps = {
  menus: MenuOptions[]
}

export default function (props: SideBarProps) {
  const { menus } = props;
  return (
    <Box sx={{ overflow: 'auto' }}>
      <List>
        {menus.map(menu => <MenuItem key={menu.url} {...menu} />)}
      </List>
    </Box>
  )
}

type MenuItemProps = {
  parentUrl?: string
} & ListItemButtonProps & MenuOptions;

function MenuItem(props: MenuItemProps) {
  const { url, icon, i18nKey, childRoutes, parentUrl, isPage = true, ...buttonProps } = props;
  const fullUrl = parentUrl ? `${parentUrl}/${url}` : url;
  const matched = !!useMatch(fullUrl);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleItemClick = () => {
    isPage && navigate(fullUrl);
    setOpen(!open);
  }
  useEffect(() => {
    setOpen(matched);
  }, [matched]);

  return (<>
    <ListItemButton {...buttonProps} selected={matched} onClick={handleItemClick}>
      <ListItemIcon>
        {React.createElement(icon)}
      </ListItemIcon>
      <ListItemText primary={<FormattedMessage id={i18nKey} />} />
      {childRoutes ? open ? <ExpandLess /> : <ExpandMore /> : null}
    </ListItemButton>
    {childRoutes &&
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {childRoutes.map(menu => <MenuItem key={menu.url} {...menu} parentUrl={fullUrl} sx={{ pl: 4 }} />)}
        </List>
      </Collapse>
    }
  </>)
}