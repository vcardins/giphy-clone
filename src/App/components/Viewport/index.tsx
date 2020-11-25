import React from 'react';

import { Wrapper, Content } from './components';
import { Header } from '../Header';
import { Logo } from '../Logo';
import { appConfig } from '../../app.config';

export const Viewport = () => {
	return (
		<Wrapper>
			<Header>
				<Logo/>
			</Header>
			<Content>
					{appConfig.title}
			</Content>
		</Wrapper>
	)
};
