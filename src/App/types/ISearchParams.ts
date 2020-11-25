import { ResourceType } from './ResourceType';

export interface ISearchParams {
	/* Search query term or phrase. */
	q: string;
	/* The maximum number of objects to return. */
	limit?: number;
	/* Specifies the starting position of the results. Defaults to 0. */
	offset?: number;
	/*
		Filters results by specified rating.
		Acceptable values include g, pg, pg-13, r.
		If you do not specify a rating, you will receive results from all possible ratings.
	*/
	rating?: string;
	/*
		Specify default language for regional content;
		use a 2-letter ISO 639-1 language code.
	*/
	lang?: string;

	resourceType?: ResourceType;
}

// &q=&limit={limit}&offset=0&rating=g&lang=en
