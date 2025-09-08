import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';

import Home from '../pages/Home';
import Hello from '../features/Hello/Hello';
import Counter from '../features/Counter/Counter';
import Header from '../components/Header/Header';
import TicTacToe from '../features/TicTacToe/TicTacToe';
import Weather from '../features/Weather/Weather';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hello" element={<Hello />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
