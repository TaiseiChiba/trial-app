import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import LinkButton from '../components/button/LinkButton';

const menuItems = [
  { title: 'Hello World', path: '/hello' },
  { title: 'カウンター', path: '/counter' },
  { title: '三目並べ', path: '/tic-tac-toe' },
  { title: '天気予報', path: '/weather' }
]

const Home = () => {
  return (
    <Grid container spacing={2} padding={4}>
      {menuItems.map((item: { title: string; path: string }) => (
        <Grid key={item.path}>
          <Card variant='outlined'>
            <CardContent>
              <Typography variant='h6'>
                {item.title}
              </Typography>
              <LinkButton to={item.path}>開く</LinkButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;