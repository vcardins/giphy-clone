import { EndpointType, ResourceType } from './../../types';
import {
	SearchActions,
	SearchActionTypes,
	SearchState,
	SearchCompleteType,
} from './action-types';

const initialState: SearchState = {
	keyword: '',
	endpointType: EndpointType.Trending,
	resourceType: ResourceType.Gifs,

	prevEndpointType: EndpointType.Trending,
	prevResourceType: ResourceType.Gifs,
};

export const searchReducer = (
	state: SearchState = initialState,
	{ type, payload }: SearchActions,
): SearchState => {
	switch (type) {
		case SearchActionTypes.SetKeyword:
			return {
				...state,
				keyword: payload as string,
				prevResourceType: state.resourceType,
				prevEndpointType: state.endpointType,
			};
		case SearchActionTypes.ResetKeyword:
			return {
				...state,
				keyword: '',
			};
		case SearchActionTypes.SetResourceType:
			return {
				...state,
				resourceType: payload as ResourceType,
				prevResourceType: state.resourceType,
			};
		case SearchActionTypes.SetSearchComplete:
			const { keyword, resourceType, endpointType } = (payload as SearchCompleteType);

			return {
				...state,
				keyword,
				resourceType,
				endpointType,
			};

		case SearchActionTypes.SetEndpointType:
			return {
				...state,
				endpointType: payload as EndpointType,
				prevEndpointType: state.endpointType,
				keyword: state.endpointType !== EndpointType.Search ? '' : state.keyword,
			};
		default:
			return state;
	}
};
