import { Controller } from 'react-hook-form';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function RadioContainer({ name, control, label, defaultValue }) {
  return (
    <div>
      <FormControl sx={{ mt: 2, mb: 2, width: '100%' }} component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => (
            <RadioGroup
              {...field}
              sx={{ width: '100%', justifyContent: 'space-between' }}
              row
              aria-label="gender"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          )}
        />
      </FormControl>
    </div>
  );
}

export default RadioContainer;
