import { Button, Typography } from '@mui/material';
import React from 'react';


export const Primary = ({ children, ...props }) => {
	return (
		<Button
			variant='contained'
			sx={{
				px: {
					xs: 2,
					sm: 3,
					md: 3.8,
					lg: 8
				},
				py:{
						xs: 1,
						sm: 1.3,
						md: 1.5,
						lg: 1.5
				} ,
				transition: 'all 200ms ease-in-out',
				borderRadius: 9,
				background: 'linear-gradient(90deg, rgba(55,114,255,1) 0%, rgba(244,96,54,1) 100%)',
				'&:hover': {
					border: 0,
					transform: 'scale(1.1)',
				},
				'&:focus': {
					outline: 'none',
				},
			}} 
			{...props}
		>
			<Typography variant='p' sx={{
				fontSize: {xs: 10, sm: 12, md: 14, lg: 16}
			}} color={'#FFF'}>
				{children}
			</Typography>
		</Button>
	);
};
