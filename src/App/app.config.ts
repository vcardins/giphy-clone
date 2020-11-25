import { IAppConfig } from './types';

const apiKey = '6sdUaxD5uI3pt4KdcSpQeFeDDmMm3x8e';

export const appConfig: IAppConfig = {
	title: 'Signal Giphy',
	apiUrl: `https://api.giphy.com/v1/{resource}/{endpoint}?api_key=${apiKey}`,
};

