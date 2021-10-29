import { Controller } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function DatePickerContainer({ control, name, label }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        control={control}
        name={name}
        defaultValue={new Date()}
        render={({ field }) => (
          <DatePicker
            label={label}
            {...field}
            renderInput={(params) => (
              <TextField fullWidth margin="normal" {...params} />
            )}
          />
        )}
      />
    </LocalizationProvider>
  );
}

export default DatePickerContainer;
