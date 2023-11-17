'use client';

import { Button, Grid, TextField } from '@mui/material';
import Image from 'next/image';
import doctor from '/public/doctor.png';

export default function Landing() {
	return (
		<Grid
			className='Landing'
			container
			direction={'column'}
			justifyContent={'center'}
			alignItems={'center'}
		>
			<Grid item>
				<h1>Trach your migraines, help doctors find a cure</h1>
				<p style={{ maxWidth: '800px', lineHeight: '1.45' }}>
					Our app helps you track your migrain events, and provides oportunity
					for you to help doctors cure migraines.
				</p>
			</Grid>
			<Grid
				item
				direction={'row'}
				justifyContent={'cetner'}
				alignItems={'center'}
				sx={{ py: 2 }}
			>
				<TextField
					sx={{ mr: 2 }}
					size='small'
					label='me@mal.com'
					variant='outlined'
				/>
				<Button variant='contained'>Signup</Button>
			</Grid>
			<Grid item>
				<Image
					style={{
						maxWidth: '700px',
						width: '100%',
						height: 'auto',
						margin: 'auto',
					}}
					src={doctor}
					alt='doctor'
					className='pointer'
				/>
			</Grid>
		</Grid>
	);
}
