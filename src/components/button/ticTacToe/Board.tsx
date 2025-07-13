import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import CellButton from './CellButton'

type Player = 'X' | 'O' | null;

export default function Board() {
  const [cells, setCells] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(cells); // 勝者を計算
  const currentPlayer = isXNext ? "X" : "O";

  const handleClick = (index: number) => {
    if (cells[index]) return;

    const newCells = [...cells];
    newCells[index] = isXNext ? "X" : "O";

    setCells(newCells);
    setIsXNext(!isXNext);
  }

  const handleReset = () => {
    setCells(Array(9).fill(null));
    setIsXNext(true);
  };

  return (

    <>
      <Typography variant="h6" textAlign="center" mb={2}>
        {winner
          ? `勝者: ${winner}`
          : cells.every(Boolean)
            ? "引き分け！"
            : `次の手番: ${currentPlayer}`}
      </Typography>


      <Container maxWidth="sm">
        <Grid container spacing={1}>
          {cells.map((value, i) => (
            <Grid size={4} key={i}>
              <CellButton value={value} disabled={!!winner} onClick={() => handleClick(i)} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box textAlign="center" mt={3}>
        <Button variant="contained" color="secondary" onClick={handleReset}>
          リセット
        </Button>
      </Box>
    </>
  )
}

/**
 * 勝敗を判定します。
 * @param cells 盤面
 * @returns 
 */
function calculateWinner(cells: Player[]): Player {
  const lines = [
    [0, 1, 2], // 横
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // 縦
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // 斜め
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (
      cells[a] &&
      cells[a] === cells[b] &&
      cells[a] === cells[c]
    ) {
      return cells[a];
    }
  }

  return null;
}