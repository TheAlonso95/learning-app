'use client';

import { Avatar, FormControlLabel, Grid, Switch } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import Logo from './Logo';

interface Props {
	switchTheme: () => void;
}

export default function Header({ switchTheme }: Props) {
	const pathName = usePathname();
	const router = useRouter();

	return (
		<Grid sx={{ p: 2 }}>
			<Grid
				container
				direction={'row'}
				justifyContent={pathName === '/' ? 'center' : 'space-between'}
				alignItems={'center'}
			>
				<Grid item lg={6}>
					<Logo />
				</Grid>
				<Grid
					xs={6}
					rowSpacing={1}
					container
					direction={'row'}
					alignItems={'center'}
					justifyContent={'flex-end'}
				>
					<FormControlLabel
						control={
							<Switch onChange={switchTheme} name='gilad' color='primary' />
						}
						label='Night Mode'
					/>
					<Avatar
						className='pointer'
						onClick={() => router.push('/profile')}
						sx={{ width: 56, height: 56, backgroundColor: '#1F6FFF' }}
					>
						R
					</Avatar>
				</Grid>
			</Grid>
		</Grid>
	);
}
