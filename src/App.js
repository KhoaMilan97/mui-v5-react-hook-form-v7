import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SkeletonLoad from './components/SkeletonLoad';
import Register from './components/Register';
import NavBar from './components/NavBar';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Routes>
            <Route path="/" element={<SkeletonLoad />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}
