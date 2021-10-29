import * as React from 'react';
import { Controller } from 'react-hook-form';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Chatting',
  'Chess',
  'Anime',
  'Basketball',
  'Drawing',
  'Music',
  'Talking',
  'Video gaming',
  'Watching movies',
  'Photography',
  'Yoga',
];

export default function SelectContainer({ name, control, label, errors }) {
  return (
    <div>
      <FormControl sx={{ mt: 2, mb: 1, width: '100%' }} error={!!errors}>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Controller
          name={name}
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              {...field}
              input={<OutlinedInput label={label} />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={field.value.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {errors && <FormHelperText>{errors?.message}</FormHelperText>}
      </FormControl>
    </div>
  );
}

// }
