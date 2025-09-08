import { Button } from '@mui/material';
import React from 'react';

type Props = {
  value: string | null;
  disabled: boolean;
  onClick: () => void;
};

export default function CellButton(props: Props) {
  return (
    <Button variant='outlined' disabled={props.disabled} fullWidth sx={{ height: 80 }} onClick={props.onClick}>
      {props.value}
    </Button>
  );
}
