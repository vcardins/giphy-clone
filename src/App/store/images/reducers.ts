import { BaseGIFModel, GIFObject } from './../../types/ISearchResponse';
import {
	ImageActions,
	ImageActionTypes,
	ImageState,
	ErrorType,
	ReadType,
	ConfigType,
} from './action-types';

const initialState: ImageState = {
	items: [],
	isLoading: false,
	totalCount: 0,
	reset: false,
};

export const imageReducer = (
	state: ImageState = initialState,
	{ type, payload }: ImageActions = {} as ImageActions,
): ImageState => {
	switch (type) {
		case ImageActionTypes.Config:
			const configPayload = payload as ConfigType;

			return {
				...state,
				...configPayload,
			};
		case ImageActionTypes.Loading:
			return {
				...state,
				isLoading: payload as boolean,
				noResultsMessage: 'Loading ...'
			};
		case ImageActionTypes.Failed:
			return {
				...state,
				isLoading: false,
				error: (payload as ErrorType).error,
			};
		case ImageActionTypes.Load:
			const { items: data, totalCount, reset } = (payload as ReadType);
			const newState: ImageState = data?.length
				? {
					...state,

					items: reset
						? buildImage(data)
						: state.items.concat(buildImage(data)),
				}
				: { ...state, items: [], noResultsMessage: 'No results found' };

			return {
				...newState,
				totalCount,
				isLoading: false,
			};
		default:
			return state;
	}
};

function buildImage (data: GIFObject[]) {
	return data.map(({id, title, slug, images}) => ({
		id,
		title,
		slug,
		images: { original: images.original, thumbnail: images.fixed_width },
	}) as BaseGIFModel)
}
