import { SearchActionTypes, SearchPayload } from './action-types';

export const setKeyword = (payload: SearchPayload[SearchActionTypes.SetKeyword]) => {
	return {
		type: SearchActionTypes.SetKeyword,
		payload,
	}
}

export const resetKeyword = () => {
	return {
		type: SearchActionTypes.ResetKeyword,
	}
}

export const setEndpointType = (payload: SearchPayload[SearchActionTypes.SetEndpointType]) => {
	return {
		type: SearchActionTypes.SetEndpointType,
		payload,
	}
}

export const setResourceType = (payload: SearchPayload[SearchActionTypes.SetResourceType]) => {
	return {
		type: SearchActionTypes.SetResourceType,
		payload,
	}
}

export const setSearchComplete = (payload: SearchPayload[SearchActionTypes.SetSearchComplete]) => {
	return {
		type: SearchActionTypes.SetSearchComplete,
		payload,
	}
}

