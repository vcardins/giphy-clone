import { ImageActionTypes, ImagePayload } from './action-types';

export const setLoading = (payload: ImagePayload[ImageActionTypes.Loading]) => ({
	type: ImageActionTypes.Loading,
	payload,
})

export const setFailed = (error: Error) => ({
	type: ImageActionTypes.Failed,
	payload: { error },
})

export const load = (payload: ImagePayload[ImageActionTypes.Load]) => ({
	type: ImageActionTypes.Load,
	payload,
})

export const setConfig = (payload: ImagePayload[ImageActionTypes.Config]) => ({
	type: ImageActionTypes.Config,
	payload,
});
