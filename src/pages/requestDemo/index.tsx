import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { alertSuccess } from "../../components/showSnackbar";
import $http from "../../utils/request";

export default function () {
  const requestSuccess = () => {
    $http.get('hello').then(res => {
      alertSuccess('This is hello success!');
    })
  }
  const requestFail = () => {
    $http.get('hello1').then(res => console.log(res));
  }
  return <>
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={requestSuccess}>Success</Button>
      <Button variant="contained" onClick={requestFail}>Failed</Button>
    </Stack>
  </>
}