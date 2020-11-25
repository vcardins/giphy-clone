import styled from 'styled-components';

export const Wrapper = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	height: 100%;
`;

export const Content = styled.div`
	flex-grow: 1;
	overflow: auto;
	padding-top: 1.5em;
`;

export const Grid = styled.div`
	display: inline-block;
	padding: 0;
	column-count: 4;
	column-gap: 1em;
`;
