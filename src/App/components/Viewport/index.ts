import styled from 'styled-components';

import { ColorMode } from '../../types/ColorMode';


export const Wrapper = styled.div<{ mode?: ColorMode }>`
	display: flex;
	flex-direction: column;
	text-align: center;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	height: 100%;
	background-color: ${({ theme, mode = ColorMode.Dark }) =>
		mode === ColorMode.Dark ? theme.colors.dark : theme.colors.bright
	};
	color: ${({ theme, mode = ColorMode.Dark }) =>
		mode === ColorMode.Dark ? theme.colors.bright : theme.colors.dark
	};
`;

export const Content = styled.div`
	flex-grow: 1;
	overflow: auto;
	padding-top: 1.5em;
`;
