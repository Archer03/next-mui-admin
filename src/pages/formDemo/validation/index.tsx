import React, { useRef } from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { MUIForm, MUIFormItem } from '../../../components/MUIForm';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

export default () => {
  const formRef = useRef<any>();
  const submit = () => {
    const handle = formRef.current?.handleSubmit(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      },
    );
    handle();
  };

  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Button variant="contained" onClick={submit} sx={{ mr: 2 }}>submit</Button>

      <Divider />

      <MUIForm ref={formRef}>
        <MUIFormItem
          name="field1"
          type="text"
          label="Input"
          rules={{ required: 'this is a required', minLength: 3 }}
          defaultValue="123qwe"
        >
          <TextField />
        </MUIFormItem>

        <MUIFormItem
          name="field2"
          label="Radio"
          rules={{ required: 'this is a required' }}
          defaultValue="female"
        >
          <RadioGroup>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </MUIFormItem>

        <MUIFormItem
          name="field3"
          type="checkbox"
          label="Checkbox"
          rules={{ required: 'this is a required' }}
          defaultValue={{ dis: true }}
        >
          <FormGroup row>
            <FormControlLabel control={<Checkbox name="lab" />} label="Label" />
            <FormControlLabel control={<Checkbox name="dis" />} label="Disabled" disabled />
            <FormControlLabel control={<Checkbox name="good" />} label="Good" />
          </FormGroup>
        </MUIFormItem>

        <MUIFormItem
          name="field4"
          type="date"
          label="Date Desktop"
          rules={{ required: 'this is a required' }}
          defaultValue={new Date()}
        >
          {({ value, onChange, textProps }: any) => (
            <DesktopDatePicker
              value={value}
              onChange={onChange}
              inputFormat="MM/dd/yyyy"
              disableMaskedInput
              renderInput={(params) => <TextField {...params} {...textProps} />}
            />
          )}
        </MUIFormItem>

        <MUIFormItem
          name="field5"
          type="text"
          label="Currency"
          rules={{ required: 'Please select your currency' }}
          defaultValue="EUR"
          variant="outlined"
        >
          <TextField select sx={{ width: 180 }}>
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </MUIFormItem>

      </MUIForm>
    </LocalizationProvider>
  );
};