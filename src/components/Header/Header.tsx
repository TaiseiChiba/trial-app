import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

export default function Header() {
	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h6' sx={{ flexGrow: 1 }}>
					<Button color='inherit' component={RouterLink} to={'/'}>React練習アプリ</Button>
				</Typography>
				<Button color='inherit' component={RouterLink} to={'/'}>Home</Button>
			</Toolbar>
		</AppBar>
	);
}
