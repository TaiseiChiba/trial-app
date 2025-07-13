import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';

import Home from './pages/Home';      // ← ここでHomeコンポーネントをimport
import Hello from './pages/Hello';
import Counter from './pages/Counter';
import Header from './components/Header';
import TicTacToe from './pages/TicTacToe';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />           {/* ← "/" でHomeを表示 */}
            <Route path="/hello" element={<Hello />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
