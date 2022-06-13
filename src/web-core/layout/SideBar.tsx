import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ExpandMore } from '@mui/icons-material';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

export type MenuOptions = {
  url: string,
  icon: any,
  i18nKey: string,
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
  const { url, icon, i18nKey, childRoutes, parentUrl, ...buttonProps } = props;
  const fullUrl = parentUrl ? `${parentUrl}/${url}` : url;
  const router = useRouter();
  const matched = router.asPath.startsWith(fullUrl);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(matched);
  }, [matched]);

  return (<>
    <ListItemButton {...buttonProps} selected={matched}>
      <Link href={fullUrl}>
        <a style={{ display: 'flex', flexGrow: 1 }} onClick={() => setOpen(!open)}>
          <ListItemIcon>
            {React.createElement(icon)}
          </ListItemIcon>
          <ListItemText primary={<FormattedMessage id={i18nKey} />} />
          {childRoutes ? open ? <ExpandLess /> : <ExpandMore /> : null}
        </a>
      </Link>
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