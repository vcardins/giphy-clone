import React from 'react';
import { BaseGIFModel } from '../../types';

import { Wrapper, Thumbnail, Overlay } from './components';

export const Gif = ({id, title, images}: BaseGIFModel) => (
	<Wrapper>
		<Thumbnail href={`#${id}`}>
			<img src={images.thumbnail.url} alt={title}/>
		</Thumbnail>
		<Overlay href="#_" id={id}>
			<img src={images.original.url} alt={title}/>
		</Overlay>
	</Wrapper>
);
