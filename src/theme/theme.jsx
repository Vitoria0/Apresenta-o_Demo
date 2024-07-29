import { createTheme } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#F46036',
		},
		secondary: {
			main: '#F46036',
		},
		tertiary: {
			main: '#F46036',
		},
		text: {
			primary: '#FFF',
			secondary: '#FFF',
			tertiary: '#02121C',
		},
		background: {
			default: '#1E1E1E',
		},
	},
});

theme = responsiveFontSizes(theme);

export { theme };