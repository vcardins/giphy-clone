import { EndpointType, ResourceType } from './../../types';
import {
	SearchActions,
	SearchActionTypes,
	SearchState,
} from './action-types';

const initialState: SearchState = {
	keyword: '',
	endpointType: EndpointType.Trending,
	resourceType: ResourceType.Gifs,
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
			};
		case SearchActionTypes.SetEndpoint:
			const endpointType = payload as EndpointType;

			return {
				...state,
				endpointType,
				keyword: endpointType === EndpointType.Trending ? '' : state.keyword
			};
		default:
			return state;
	}
};
