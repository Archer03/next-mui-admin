import { createRoot, Root } from "react-dom/client";
import Snackbar from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert";
import { useState } from "react";
import AlertTitle from "@mui/material/AlertTitle";

/**
 * 全局api方式使用
 */
export function alertSuccess(message: string) {
  const div = document.createElement('div');
  const id = Math.random().toString(36).substring(2);
  div.id = id;
  document.body.append(div);
  const root = createRoot(div);
  root.render(<SuccessSnackbar id={id} root={root} message={message} />);
}

export function alertError(title: string, message: string) {
  const div = document.createElement('div');
  const id = Math.random().toString(36).substring(2);
  div.id = id;
  document.body.append(div);
  const root = createRoot(div);
  root.render(<ErrorSnackbar id={id} root={root} title={title} message={message} />);
}

export function SuccessSnackbar(props: { id: string, root: Root, message: string }) {
  const { id, root, message } = props;
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      root.unmount(); // 卸載事件
      const div = document.getElementById(id);
      document.body.removeChild(div!)
    }, 1000); // 預留動畫
  }
  return (
    <Snackbar
      open={open}
      autoHideDuration={1500}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert severity="success">{message}</Alert>
    </Snackbar>
  );
}

export function ErrorSnackbar(props: { id: string, root: Root, title: string, message: string }) {
  const { id, root, title, message } = props;
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      root.unmount(); // 卸載事件
      const div = document.getElementById(id);
      document.body.removeChild(div!)
    }, 1000); // 預留動畫
  }
  return (
    <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
      <Alert severity="error" onClose={handleClose}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
}

