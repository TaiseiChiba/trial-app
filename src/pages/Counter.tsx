import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'

export default function Counter() {


  const [count, setCount] = useState(0);

  const audioRef = useRef(null);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  useEffect(() => {
    if (count > 0 && count % 3 === 0) {
      const audio = document.querySelector('audio');
      if (audio) {
        audio.play();
      }
    }
  }, [count]);

  const isMultipleOfThree = count > 0 && count % 3 === 0;

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: '10' }}>
      <Typography variant='h3' gutterBottom>
        カウント：{count}
      </Typography>

      <Box minHeight={40}>
        {
          isMultipleOfThree && (
            <Typography variant='h4' color='primary'>
              サンッ！
            </Typography>
          )
        }
      </Box>

      <Stack direction="row" spacing={4} justifyContent="center">
        <Button variant='outlined' color='secondary' onClick={decrement}>-</Button>
        <Button variant='outlined' color='primary' onClick={increment}>+</Button>
      </Stack>
      {/* 音声ファイル読み込み */}
      <audio ref={audioRef} src="voice/kurae.mp3" />
    </Container>
  )
}
