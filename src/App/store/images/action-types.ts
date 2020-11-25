import { ResourceType, EndpointType } from '../../types';
import { BaseGIFModel, GIFObject } from '../../types/ISearchResponse';
import { ActionMap } from '../ActionMap';

export interface ImageState {
	items: BaseGIFModel[];
	totalCount: number;
	resourceType?: ResourceType;
	endpointType?: EndpointType;
	isLoading?: boolean;
	noResultsMessage?: string;
	error?: Error;
}

export enum ImageActionTypes {
	Loading = 'LOADING_GIFS',
	Failed = 'FAILED_GIFS',
	Succeed = 'SUCCEED_GIFS',
	Load = 'LOADED_GIFS',
}

export type ErrorType = {
	error: Error
};

export type LoadingType = {
	loading: boolean;
	resourceType: ResourceType;
	endpointType: EndpointType;
};

export type ReadType = {
	items: GIFObject[];
	resourceType: ResourceType;
	endpointType: EndpointType;
	totalCount: number;
}

export type ImagePayload = {
	[ImageActionTypes.Loading]: LoadingType;
	[ImageActionTypes.Failed]: ErrorType;
	[ImageActionTypes.Load]: ReadType;
};

export type ImageActions = ActionMap<ImagePayload>[keyof ActionMap<ImagePayload>];
