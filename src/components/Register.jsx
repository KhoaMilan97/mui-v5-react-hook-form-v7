import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Grid, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';

import InputContainer from '../container/InputContainer';
import RadioContainer from '../container/RadioContainer';
import DatePickerContainer from '../container/DatePickerContainer';
import SelectContainer from '../container/SelectContainer';
import CheckBoxContainer from '../container/CheckBoxContainer';

const schema = yup
  .object({
    username: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(32),
    cf_password: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Password must match'),
    hobbies: yup.array().min(1, 'Pick at least 1 hobbies'),
    acceptTerms: yup
      .bool()
      .oneOf([true], 'Accept Terms & Conditions must be checked'),
  })
  .required();

function Register() {
  const [showPass, setShowPass] = useState(false);
  const [showCfPass, setShowCfPass] = useState(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleClickShowPassword = () => {
    setShowPass((prev) => !prev);
  };

  const handleClickShowCfPassword = () => {
    setShowCfPass((prevState) => !prevState);
  };

  return (
    <div className="bg-violet" style={{ width: '100%' }}>
      <Grid container justifyContent="center">
        <Grid
          item
          xs={7}
          component={Box}
          sx={{
            mt: '3rem',
            mb: '3rem',
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '5px',
            boxShadow:
              '0px 3px 3px -2px rgb(154 11 179), 0px 3px 4px 0px rgb(80 10 92), 0px 1px 8px 0px rgb(92 7 106)',
          }}
        >
          <Typography
            align="center"
            color="primary"
            variant="h4"
            component="h1"
          >
            Register
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <InputContainer
              name="username"
              control={control}
              label="Username"
              errors={errors.username}
            />
            <InputContainer
              name="email"
              control={control}
              label="Email"
              errors={errors.email}
            />
            <InputContainer
              name="password"
              control={control}
              label="Password"
              type="password"
              showPass={showPass}
              handleClickShowPassword={handleClickShowPassword}
              errors={errors.password}
            />
            <InputContainer
              name="cf_password"
              control={control}
              label="Confirm Password"
              type="password"
              showPass={showCfPass}
              handleClickShowPassword={handleClickShowCfPassword}
              errors={errors.cf_password}
            />
            <RadioContainer
              control={control}
              name="gender"
              label="Gender"
              defaultValue="female"
            />
            <DatePickerContainer
              control={control}
              name={'birthday'}
              label="Birthday"
            />
            <SelectContainer
              name="hobbies"
              control={control}
              label="Hobbies"
              errors={errors.hobbies}
            />
            <CheckBoxContainer
              name="acceptTerms"
              control={control}
              label="I Agree To The Term & Conditions"
              errors={errors.acceptTerms}
            />

            <Button
              type="submit"
              sx={{ mt: 2, mb: 2 }}
              variant="contained"
              color="secondary"
            >
              Register
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default Register;
