import React, { useState } from 'react'
import { Box, Button, Paper, Typography } from '@mui/material';
import { Mode } from '../types/Mode'
import BoardHuman from '../components/button/ticTacToe/BoardHuman';
import BoardCpu from '../components/button/ticTacToe/BoardCpu';

export default function TicTacToe() {

  const humanMode: Mode = {
    id: 'human',
    name: '対人モード'
  };

  const cpuMode: Mode = {
    id: 'cpu',
    name: 'CPUモード'
  }

  const [mode, setMode] = useState<Mode | null>(null);

  const handleSelectMode = (selectMode: Mode) => {
    setMode(selectMode);
  }

  return (
    <>
      <Typography variant='h3'>三目並べ</Typography>

      {mode === null ? (
        <Box display='flex' justifyContent='center' alignItems={'center'} height={'auto'}>
          <Paper elevation={1} sx={{ margin: 2, padding: 4, textAlign: 'center', borderRadius: 4, width: '100%' }}>
            <Typography variant='h4' gutterBottom>
              モードを選択
            </Typography>
            <Box mt={2}>
              <Button variant='contained' color='primary' size='large' onClick={() => handleSelectMode(humanMode)} sx={{ margin: 1 }}>
                {humanMode.name}
              </Button>
              <Button variant='contained' color='primary' size='large' onClick={() => handleSelectMode(cpuMode)} sx={{ margin: 1 }}>
                {cpuMode.name}
              </Button>
            </Box>
          </Paper>
        </Box>
      ) : (
        <>
          {mode?.id === humanMode.id && <BoardHuman mode={mode} />}
          {mode?.id === cpuMode.id && <BoardCpu mode={mode} />}
        </>
        // <Board mode={mode} />
      )}
    </>
  )
}
