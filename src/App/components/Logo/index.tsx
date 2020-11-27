import React from 'react';
import styled from 'styled-components';

import logo from './giphy-logo.svg';
import { appConfig } from '../../app.config';

const Wrapper = styled.span`
	display: flex;
	align-items: center;
	margin-right: 1em;
	font-size: 20px;

	img {
		height: 32px;
		margin-right: 0.5em;
	}
`;

export const Logo = React.memo(() => (
	<Wrapper>
		<img src={logo} alt={appConfig.title} />
		<span>{appConfig.title}</span>
	</Wrapper>
));
