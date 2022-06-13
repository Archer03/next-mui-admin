import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import SideBar, { MenuOptions } from './SideBar';
import Header from './Header';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import useLayoutLoading from './useLayoutLoading';

const drawerWidth = 240;

type LayoutProps = React.PropsWithChildren<{
  menus: MenuOptions[]
}>
export default function Layout(props: LayoutProps) {
  const { menus } = props;
  const loading = useLayoutLoading();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <SideBar menus={menus} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Container maxWidth={false} sx={{ p: 3 }} >
          {props.children}
        </Container>
      </Box>
      <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading} >
        <CircularProgress />
      </Backdrop>
    </Box>
  );
}
