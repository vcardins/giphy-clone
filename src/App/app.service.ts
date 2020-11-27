import { appConfig } from './app.config';
import { ISearchParams, ISearchResponse, ResourceType, EndpointType } from './types';

export const search = async (
	endpoint: EndpointType,
	q?: ISearchParams['q'],
	resource = ResourceType.Gifs,
	props: Omit<ISearchParams, 'q' | 'resourceType'> = {},
): Promise<ISearchResponse | undefined> => {
	const { limit = 25, offset = 0, rating = 'q', lang = 'en'} = props;
	const qs = `&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}${q ? `&q=${q}` : ''}`;
	const url = `${appConfig.apiUrl}${qs}`
		.replace('{resource}', resource)
		.replace('{endpoint}', endpoint);

	try {
		const headers = new Headers({ 'content-type': 'application/json' });
		const request: RequestInit = {
			method: 'GET',
			headers,
		};
		const response = await fetch(url, request);
		return await response.json() as ISearchResponse;
	} catch(e) {

	}
}

