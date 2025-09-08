import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import CellButton from './CellButton';
import { Mode } from '../../../types/Mode';

type Player = 'X' | 'O' | null;

type Props = {
	mode: Mode | null;
};

export default function BoardHuman(props: Props) {
	const [cells, setCells] = useState<Player[]>(Array(9).fill(null));
	const [isXNext, setIsXNext] = useState(true);

	const winner = calculateWinner(cells); // 勝者を計算
	const currentPlayer = isXNext ? 'X' : 'O';

	/**
	 * セルを押した時の関数
	 * @param index セル番号
	 * @returns 
	 */
	const handleClick = (index: number) => {
		if (cells[index]) return;

		const newCells = [...cells];
		newCells[index] = isXNext ? 'X' : 'O';

		setCells(newCells);
		setIsXNext(!isXNext);
	};

	/**
	 * 盤面をリセットします。
	 */
	const handleReset = () => {
		setCells(Array(9).fill(null));
		setIsXNext(true);
	};

	/**
	 * モード選択画面へ戻ります
	 */
	const handleBackSelectMode = () => {
		window.location.reload();
	};

	return (
		<>
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

			<Container maxWidth="sm">
				<Grid container spacing={1}>
					{cells.map((value, i) => (
						<Grid key={i} size={4}>
							<CellButton value={value} disabled={!!winner} onClick={() => handleClick(i)} />
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
	);
}

/**
 * 勝敗を判定します。
 * @param cells 盤面
 * @returns 勝者
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
