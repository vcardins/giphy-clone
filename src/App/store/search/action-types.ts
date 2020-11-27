import { EndpointType, ResourceType } from './../../types';
import { ActionMap } from '../ActionMap';

export interface SearchState {
	keyword?: string;
	endpointType: EndpointType;
	prevEndpointType?: EndpointType;
	resourceType: ResourceType;
	prevResourceType?: ResourceType;
}

export enum SearchActionTypes {
	SetKeyword = 'SET_KEYWORD',
	ResetKeyword = 'RESET_KEYWORD',
	SetEndpointType = 'SET_ENDPOINT_TYPE',
	SetResourceType = 'SET_RESOURCE_TYPE',
	SetSearchComplete = 'SET_SEARCH_COMPLETE',
}

export type ErrorType = {
	error: Error
};

export type SearchCompleteType = {
	keyword?: string;
	endpointType: EndpointType;
	resourceType: ResourceType;
};

export type SearchPayload = {
	[SearchActionTypes.SetKeyword]: string;
	[SearchActionTypes.ResetKeyword]: void;
	[SearchActionTypes.SetEndpointType]: EndpointType;
	[SearchActionTypes.SetResourceType]: ResourceType;
	[SearchActionTypes.SetSearchComplete]: SearchCompleteType;
};

export type SearchActions = ActionMap<SearchPayload>[keyof ActionMap<SearchPayload>];
