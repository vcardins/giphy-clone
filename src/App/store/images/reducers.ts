import { BaseGIFModel, GIFObject } from './../../types/ISearchResponse';
import {
	ImageActions,
	ImageActionTypes,
	ImageState,
	ErrorType,
	ReadType,
	LoadingType,
} from './action-types';

const initialState: ImageState = {
	items: [],
	isLoading: false,
	totalCount: 0,
};

export const imageReducer = (
	state: ImageState = initialState,
	{ type, payload }: ImageActions,
): ImageState => {
	switch (type) {
		case ImageActionTypes.Loading:
			const loadingPayload = payload as LoadingType;

			return {
				...state,
				isLoading: loadingPayload.loading,
				resourceType: loadingPayload.resourceType,
				endpointType: loadingPayload.endpointType,
				noResultsMessage: 'Loading ...'
			};
		case ImageActionTypes.Failed:
			return {
				...state,
				isLoading: false,
				error: (payload as ErrorType).error,
			};
		case ImageActionTypes.Load:
			const { items: data, totalCount, resourceType, endpointType } = (payload as ReadType);
			const resetItems = (state.resourceType !== resourceType) || (state.endpointType !== endpointType);
			const newState: ImageState = data?.length
				? {
					...state,

					items: resetItems
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
