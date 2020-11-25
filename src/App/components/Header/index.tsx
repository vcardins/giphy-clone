import styled from 'styled-components';

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.dark };
	flex-grow: 0;
	height: 4rem;
	min-height: 4rem;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);

	> * {
		margin: 0 0.5em;
	}
`;
