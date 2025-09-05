import { Player } from "../../types/Player";

// 型定義
export type Difficulty = "easy" | "normal" | "hard";

// 盤面インデックスの一覧
const allIndices = Array.from({ length: 9 }, (_, i) => i);

/**
 * 弱いモードのCPU（ランダムに空きマスを選ぶ）
 */
export function cpuMoveEasy(cells: Player[], cpuMark: Player): number {
  const emptyIndices = cells
    .map((cell, idx) => (cell === null ? idx : null))
    .filter((idx): idx is number => idx !== null);

  const randomIndex =
    emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  return randomIndex;
}

/**
 * 普通モードのCPU（勝てる手を優先。なければランダム）
 */
export function cpuMoveNormal(
  cells: Player[],
  cpuMark: Player,
  xPlayer: Player,
  oPlayer: Player
): number {
  const opponentMark: Player = cpuMark.name === "X" ? oPlayer : xPlayer;

  // 1. 自分が勝てる手があれば打つ
  for (const idx of getEmptyIndices(cells)) {
    const copy = [...cells];
    copy[idx] = cpuMark;
    if (checkWinner(copy) === cpuMark) return idx;
  }

  // 2. 相手の勝ち手をブロック
  for (const idx of getEmptyIndices(cells)) {
    const copy = [...cells];
    copy[idx] = opponentMark;
    if (checkWinner(copy) === opponentMark) return idx;
  }

  // 3. ランダムに置く
  return cpuMoveEasy(cells, cpuMark);
}

/**
 * 強いモードのCPU（ミニマックスアルゴリズム）
 */
export function cpuMoveHard(
  cells: Player[],
  cpuMark: Player,
  xPlayer: Player,
  oPlayer: Player
): number {
  const bestMove = minimax(cells, cpuMark, cpuMark, xPlayer, oPlayer).index;
  return bestMove;
}

function getEmptyIndices(cells: Player[]): number[] {
  return cells
    .map((cell, i) => (cell === null ? i : null))
    .filter((i): i is number => i !== null);
}

// 勝敗判定
function checkWinner(cells: Player[]): Player | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}

// ミニマックスアルゴリズム（最強モード）
function minimax(
  cells: Player[],
  player: Player,
  cpuMark: Player,
  xPlayer: Player,
  oPlayer: Player
): { index: number; score: number } {
  const emptyIndices = getEmptyIndices(cells);
  const winner = checkWinner(cells);

  // 評価
  if (winner === cpuMark) return { index: -1, score: 10 };
  if (winner && winner !== cpuMark) return { index: -1, score: -10 };
  if (emptyIndices.length === 0) return { index: -1, score: 0 };

  const moves: { index: number; score: number }[] = [];

  for (const idx of emptyIndices) {
    const newCells = [...cells];
    newCells[idx] = player;

    const result = minimax(
      newCells,
      player.name === "X" ? oPlayer : xPlayer,
      cpuMark,
      xPlayer,
      oPlayer
    );

    moves.push({
      index: idx,
      score: result.score * (player === cpuMark ? 1 : -1),
    });
  }

  // ベストスコア選択
  const best = moves.reduce((a, b) => (a.score > b.score ? a : b));
  return best;
}
