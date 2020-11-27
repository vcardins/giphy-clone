import { ResourceType, EndpointType } from '../../types';
import { BaseGIFModel, GIFObject } from '../../types/ISearchResponse';
import { ActionMap } from '../ActionMap';

export interface ImageState {
	items: BaseGIFModel[];
	totalCount: number;
	reset: boolean;
	isLoading?: boolean;
	noResultsMessage?: string;
	error?: Error;
}

export enum ImageActionTypes {
	Config = 'CONFIG_PARAMS',
	Loading = 'LOADING_GIFS',
	Failed = 'FAILED_GIFS',
	Load = 'LOADED_GIFS',
}

export type ErrorType = {
	error: Error
};

export type ConfigType = {
	resourceType: ResourceType;
	endpointType: EndpointType;
};

export type LoadingType = {
	loading: boolean;
};

export type ReadType = {
	items: GIFObject[];
	totalCount: number;
	reset: boolean;
};

export type ImagePayload = {
	[ImageActionTypes.Loading]: boolean;
	[ImageActionTypes.Failed]: ErrorType;
	[ImageActionTypes.Load]: ReadType;
	[ImageActionTypes.Config]: ConfigType;
};

export type ImageActions = ActionMap<ImagePayload>[keyof ActionMap<ImagePayload>];
