import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

export default function LinkButton({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Button variant="contained" component={RouterLink} to={to}>
      {children}
    </Button>
  );
}
