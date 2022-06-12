import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import SideBar, { MenuOptions } from './SideBar';
import Header from './Header';

const drawerWidth = 240;

type LayoutProps = React.PropsWithChildren<{
  menus: MenuOptions[]
}>
export default function Layout(props: LayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <CssBaseline />
      <Header />
      <Toolbar sx={{ width: '100%' }} />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <SideBar menus={props.menus} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {props.children}
      </Box>
    </Box>
  );
}
