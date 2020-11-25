import { ImageActionTypes, ReadType } from './action-types';

export const loadImages = (payload: ReadType) => ({
	type: ImageActionTypes.Load,
	payload
});
