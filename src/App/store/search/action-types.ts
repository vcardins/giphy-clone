import { EndpointType, ResourceType } from './../../types';
import { ActionMap } from '../ActionMap';

export interface SearchState {
	keyword?: string;
	endpointType: EndpointType;
	resourceType: ResourceType;
}

export enum SearchActionTypes {
	SetKeyword = 'SET_KEYWORD',
	ResetKeyword = 'RESET_KEYWORD',
	SetEndpoint = 'SET_ENDPOINT',
	SetResourceType = 'SET_RESOURCE_TYPE',
}

export type ErrorType = {
	error: Error
};

export type SearchPayload = {
	[SearchActionTypes.SetKeyword]: string;
	[SearchActionTypes.ResetKeyword]: void;
	[SearchActionTypes.SetEndpoint]: EndpointType;
	[SearchActionTypes.SetResourceType]: ResourceType;
};

export type SearchActions = ActionMap<SearchPayload>[keyof ActionMap<SearchPayload>];
