import React from 'react';
import styled, { css } from 'styled-components';

export const Button = styled.button`
	${({disabled}) => css`
		background-color: ${({theme}) => disabled
			? theme.colors.tertiary
			: theme.colors.primary
		};
		color: ${({theme}) => disabled
			? theme.colors.dark
			: theme.colors.bright
		};
	`};
	font-size: 12px;
	padding: 0.25em 1em;
	border: none;
	border-radius: 2px;
`;

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const BrowseButton = React.memo((props: IButtonProps) => (
	<Button {...props}/>
));
