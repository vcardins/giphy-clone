import { createGlobalStyle } from 'styled-components';

import { theme } from '../theme';

export const globalStyle = createGlobalStyle`
	::-webkit-scrollbar-track {
		background-color: ${theme.colors.secondary};
	}

	::-webkit-scrollbar {
		width: 0.5em;
	}

	::-webkit-scrollbar-thumb {
		background-color: ${theme.colors.primary};
	}

	* {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
	}

	html {
		line-height: 1.5;
		font-size: ${theme.fontSizes[1]}px;
		box-sizing: border-box;

		a {
			color: inherit;
			text-decoration: none;
		}
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
	}

	/* wrapping these attributes with @media screen so printing is not affected */
	@media screen {
		html,
		body {
			height: 100vh;
			width: 100vw;
			overflow: hidden;
		}
	}

	#root {
		height: 100vh;
	}

	h1 { font-size: ${theme.heading.h1}; }
	h2 { font-size: ${theme.heading.h2}; }
	h3 { font-size: ${theme.heading.h3}; }
	h4 { font-size: ${theme.heading.h4}; }
	h5 { font-size: ${theme.heading.h5}; }

	button {
		&:not([disabled]) {
			cursor: pointer;
		}
		&:disabled {
			cursor: not-allowed;
		}
	}

	[disabled] {
		input,
		textarea,
		select,
		button {
			cursor: not-allowed;
		}

		button {
			background-color: #ccc;
		}
	}

	fieldset {
		border: 0;
	}
`;
