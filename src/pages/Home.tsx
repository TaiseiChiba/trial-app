import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const menuItems = [
  { title: 'Hello World', path: '/hello' },
  { title: 'カウンター', path: '/counter' }
]

const LinkButton = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Button variant="contained" component={RouterLink} to={to}>
    {children}
  </Button>
);

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