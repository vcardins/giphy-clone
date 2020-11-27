import { ITheme } from './ITheme';

const fonts: ITheme['fonts'] = {
	primary: 'Lato, sans-serif',
	pre: 'Courier, monospace',
};

const fontSizes: ITheme['fontSizes'] = [12, 14, 16, 20, 24, 36, 48, 80, 96];

const heading: ITheme['heading'] = {
	h1: '2em',
	h2: '1.5em',
	h3: '1.15em',
	h4: '1em',
	h5: '.75em',
	h6: '.5em',
};

const space: ITheme['space'] = [
	// margin and padding
	0, 4, 8, 16, 24, 32, 48, 64,
];

const spacing: ITheme['spacing'] = {
	none: 0,
	mini: '0.25em',
	small: '0.5em',
	normal: '1em',
	medium: '1.5em',
	large: '2em',
	larger: '3em',
	largest: '4em',
};

const sizes: ITheme['sizes'] = {
	radius: '3px',
	header: '40px',
	titleBar: '60px',
	toolBar: '50px',
};

export const theme: ITheme = {
	colors: {
		primary: '#074ca7',
		secondary: '#7ca1d2',
		tertiary: '#ccc',
		dark: '#282c34',
		bright: '#fff',
	},
	fonts,
	sizes,
	fontSizes,
	space,
	spacing,
	heading,
};
