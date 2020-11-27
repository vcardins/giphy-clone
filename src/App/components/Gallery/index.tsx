import React, { memo } from 'react';

import { BaseGIFModel } from '../../types';
import { Grid } from './components';
import { Gif } from './Gif';

const containerId = 'image-gallery';

interface IGalleryProps {
	items: BaseGIFModel[];
	noResultsMessage?: string;
}

export const Gallery = memo((({items, noResultsMessage}: IGalleryProps) => (
	!items.length
		? <span>{noResultsMessage}</span>
		: (
			<Grid id={containerId}>
				{items?.map(({id, title, slug, images: {original, thumbnail}}) => (
					<Gif
						key={id}
						id={id}
						title={title}
						slug={slug}
						images={{thumbnail, original}}
					/>
				))}
			</Grid>
		)
)));
