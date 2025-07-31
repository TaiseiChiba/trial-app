import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React, { useActionState, useState } from 'react'
import CellButton from './CellButton'
import { Mode } from '../../../types/Mode'
import { CpuMode } from '../../../types/CpuMode';
import { Player } from '../../../types/Player';


type Props = {
  mode: Mode | null
}

export default function BoardCpu(props: Props) {

  const xPlayer: Player = {
    name: 'X'
  }

  const oPlayer: Player = {
    name: 'O'
  }

  const players = [xPlayer, oPlayer, null];

  const easyMode: CpuMode = {
    id: "easy",
    name: "弱い"
  };

  const normalMode: CpuMode = {
    id: "normal",
    name: "普通"
  };

  const hardMode: CpuMode = {
    id: "hard",
    name: "強い"
  };

  const cpuModes = [easyMode, normalMode, hardMode];


  const [cells, setCells] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [cpuMode, setCpuMode] = useState<CpuMode>();

  const winner = calculateWinner(cells); // 勝者を計算
  const currentPlayer = isXNext ? "X" : "O";

  const handleCpuMode = (selectedCpuMode: CpuMode) => {
    setCpuMode(selectedCpuMode);
  }

  /**
   * セルを押した時の関数
   * @param index セル番号
   * @returns 
   */
  const handleClick = (index: number) => {
    if (cells[index]) return;

    const newCells = [...cells];
    newCells[index] = isXNext ? xPlayer : oPlayer;

    setCells(newCells);
    setIsXNext(!isXNext);
  }

  /**
   * 盤面をリセットします。
   */
  const handleReset = () => {
    setCells(Array(9).fill(null));
    setIsXNext(true);
    setCpuMode(undefined);
  };

  /**
   * モード選択画面へ戻ります
   */
  const handleBackSelectMode = () => {
    window.location.reload();
  }

  return (
    <Box>
      <Box>
        <Typography variant='h4' textAlign="center" mb={2}>
          {props.mode?.name}
        </Typography>
      </Box>
      <Typography variant="h6" textAlign="center" mb={2}>
        {winner
          ? `勝者: ${winner}`
          : cells.every(Boolean)
            ? "引き分け！"
            : `次の手番: ${currentPlayer}`}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {cpuModes.map(cm => (
          <Button
            id={cm.id}
            variant="contained"
            color="info"
            onClick={() => handleCpuMode(cm)}
            sx={{ margin: 2 }}
            disabled={cpuMode != null}>
            {cm.name}
          </Button>
        ))}
      </Box>

      {
        cpuMode && (
          <>
            <Container maxWidth="sm">
              <Grid container spacing={1}>
                {cells.map((value, i) => (
                  <Grid size={4} key={i}>
                    <CellButton value={value?.name} disabled={!!winner} onClick={() => handleClick(i)} />
                  </Grid>
                ))}
              </Grid>
            </Container>

            <Box textAlign="center" mt={3}>
              <Button variant="contained" color="info" onClick={handleBackSelectMode} sx={{ margin: 2 }}>
                モード選択へ戻る
              </Button>
              <Button variant="contained" color="secondary" onClick={handleReset} sx={{ margin: 2 }}>
                リセット
              </Button>
            </Box>
          </>
        )
      }
    </Box>
  )
}

/**
 * 勝敗を判定します。
 * @param cells 盤面
 * @returns 勝者
 */
function calculateWinner(cells: Player[]): String | null {
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
      cells[a]?.name &&
      cells[a]?.name === cells[b]?.name &&
      cells[a]?.name === cells[c]?.name
    ) {
      return cells[a].name;
    }
  }

  return null;
}