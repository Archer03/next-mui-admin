import React from "react";
import { createContext, forwardRef, useContext, useImperativeHandle } from "react";
import { useController, useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";


// @todo
// 无效日期
// input number
// rules 数组
// rules 动态移除
// 嵌套表单

export const MUIFormContext = createContext<any>({});

export const MUIForm = forwardRef((props: any, ref: any) => {
  const { handleSubmit, control } = useForm({
    mode: 'all',
  });
  useImperativeHandle(ref, () => ({
    handleSubmit,
  }));

  return (
    <MUIFormContext.Provider value={{ control, handleSubmit }}>
      {props.children}
    </MUIFormContext.Provider>
  );
});

export const MUIFormItem = (props: any) => {
  return <Box sx={{ display: 'inline-block', p: 2 }}>
    <FormItem {...props} />
  </Box>
}

const FormItem = (props: any) => {
  const { control } = useContext(MUIFormContext);
  const { children, name, label, rules, defaultValue, variant = 'standard', type } = props;
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue });

  if (type === 'text') {
    return React.cloneElement(children, {
      label,
      value,
      onChange,
      error: error ? true : false,
      helperText: error?.message,
      variant
    })
  }

  if (type === 'date') {
    const textProps = { label, error: error ? true : false, helperText: error?.message, variant };
    return children({ value, onChange, textProps });
  }

  let fieldComp: any = null;
  if (type === 'checkbox') {
    fieldComp = React.cloneElement(children, {
      onChange: (e: any) => {
        onChange({ ...value, [e.target.name]: e.target.checked });
      },
      children: React.Children.map(children.props.children, (formCtrlLabel: any) => {
        const checkboxNode = formCtrlLabel.props.control;
        return React.cloneElement(formCtrlLabel, {
          control: React.cloneElement(checkboxNode, {
            defaultChecked: defaultValue[checkboxNode.props.name],
          }),
        });
      }),
    });
  } else { // radio
    fieldComp = React.cloneElement(children, { onChange, defaultValue });
  }

  return (
    <FormControl variant={variant} error={error ? true : false}>
      <FormLabel>{label}</FormLabel>
      {fieldComp}
      {error?.message && <FormHelperText>{error?.message}</FormHelperText>}
    </FormControl>
  );
};
