import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SkeletonLoad from './components/SkeletonLoad';
import Register from './components/Register';

const theme = createTheme();

export default function SignIn() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Route path="/" exact component={SkeletonLoad} />
          <Route path="/register" exact component={Register} />
        </Container>
      </Router>
    </ThemeProvider>
  );
}
