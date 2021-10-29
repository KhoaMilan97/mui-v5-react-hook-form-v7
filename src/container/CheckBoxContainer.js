import React from 'react';
import { Controller } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';

function CheckBoxContainer({ name, control, label, errors }) {
  console.log(errors);

  return (
    <>
      <FormControlLabel
        sx={{ width: '100%', mt: 2, mb: 1 }}
        control={
          <Controller
            name={name}
            defaultValue={false}
            control={control}
            render={({ field }) => (
              <Checkbox
                onChange={(e) => field.onChange(e.target.checked)}
                checked={field.value}
              />
            )}
          />
        }
        label={label}
      />
      {!!errors && (
        <FormHelperText error={!!errors}>{errors?.message}</FormHelperText>
      )}
    </>
  );
}

export default CheckBoxContainer;
