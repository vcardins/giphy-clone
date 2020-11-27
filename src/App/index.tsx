import React from 'react';
import { ThemeProvider } from 'styled-components';

import { globalStyle as GlobalStyle } from './app.styles';
import { theme } from '../theme';

import { Viewport } from './Viewport';

export const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle/>
		<Viewport/>
	</ThemeProvider>
);
