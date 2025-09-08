
// MUIのUIコンポーネントをimport
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';


// カウンターコンポーネント
export default function Counter() {
  // カウントの状態管理
  const [count, setCount] = useState(0);

  // audioタグへの参照
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // カウントを1増やす
  const increment = () => {
    setCount(count + 1);
  };

  // カウントを1減らす
  const decrement = () => {
    setCount(count - 1);
  };

  // カウントが3の倍数のとき音声を再生
  useEffect(() => {
    if (count > 0 && count % 3 === 0) {
      const audio = document.querySelector('audio');
      if (audio) {
        audio.play();
      }
    }
  }, [count]);

  // 3の倍数かどうか判定
  const isMultipleOfThree = count > 0 && count % 3 === 0;

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: '10' }}>
      {/* カウント表示 */}
      <Typography variant='h3' gutterBottom>
        カウント：{count}
      </Typography>

      {/* 3の倍数のとき「サンッ！」を表示 */}
      <Box minHeight={40}>
        {
          isMultipleOfThree && (
            <Typography variant='h4' color='primary'>
              サンッ！
            </Typography>
          )
        }
      </Box>

      {/* 増減ボタン */}
      <Stack direction="row" spacing={4} justifyContent="center">
        <Button variant='outlined' color='secondary' onClick={decrement}>-</Button>
        <Button variant='outlined' color='primary' onClick={increment}>+</Button>
      </Stack>
      {/* 音声ファイル読み込み */}
      <audio ref={audioRef} src="voice/kurae.mp3" />
    </Container>
  );
}
