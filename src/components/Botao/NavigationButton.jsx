import { Button, Typography } from "@mui/material";

import React from "react";

import  useNavigationButton  from '../../hooks/useHandleNavigation';

export const Navigation = ({ page }) => {
	const { handleNavigationClick } = useNavigationButton(page);
	return (
		<Button
			variant='contained'
			onClick={handleNavigationClick}
			sx={{
				px: {
					xs: 2,
					sm: 3,
					md: 4,
					lg: 4
				},
				py:{
						xs: 1,
						sm: 1.5,
						md: 2,
						lg: 2
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
		>
			<Typography variant='p' color={'#FFF'} sx={{
				fontSize: {xs: 10, sm: 12, md: 14, lg: 16}
			}}>
				Saber Mais
			</Typography>
		</Button>
	);
};