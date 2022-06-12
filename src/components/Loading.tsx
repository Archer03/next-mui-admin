import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function () {
  return <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true} >
    <CircularProgress />
  </Backdrop>
}