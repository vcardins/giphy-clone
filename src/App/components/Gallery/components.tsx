import styled from 'styled-components';

export const Wrapper = styled.figure`
	margin: 0;
	display: grid;
	grid-template-rows: 1fr auto;
	margin-bottom: 10px;
	break-inside: avoid;
	> a > img {
		grid-row: 1 / -1;
		grid-column: 1;
	}
`;

export const Thumbnail = styled.a`
	img {
		border: 1px solid #ccc;
		padding: 5px;
		:hover {
			box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.15);
		}
	}
`;

export const Overlay = styled.a`
	position: fixed;
	z-index: 99;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.9);
	display: flex;
	align-items: center;
	justify-content: center;
	visibility: hidden;
	opacity: 0;
	transition: opacity 0.3s;

	img {
		max-width: 90%;
		max-height: 90%;
		width: auto;
		height: auto;
		transform: scale(0.95);
		transition: transform 0.3s;
	}

	&:target {
		visibility: visible;
		outline: none;
		cursor: default;
		opacity: 1;

		img {
			transform: scale(1);
		}
	}
`;


export const Grid = styled.div`
	display: inline-block;
	padding: 0;
	column-count: 4;
	column-gap: 1em;
`;
