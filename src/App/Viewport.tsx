import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	Wrapper, Content,
	Header, Logo, SearchInput, BrowseButton, ResourceSelector, Gallery
} from './components';

import { EndpointType, ISearchParams, ResourceType, ColorMode } from './types';
import { search } from './app.service';

import { AppState } from "./store";
import * as SearchActions from './store/search/actions';
import * as ImageActions from './store/images/actions';

export const Viewport = () => {
	const dispatch = useDispatch();
	const [tempKeyword, setTempKeyword] = useState('');
	const { keyword, endpointType, resourceType, prevResourceType } = useSelector((state: AppState) => state.searchModule);
	const { items, totalCount, isLoading, noResultsMessage } = useSelector((state: AppState) => state.imageModule);

	const fetchResults = useCallback(async (endpoint?: EndpointType, key?: string | null, props: Omit<ISearchParams, 'q'> = {}) => {
		const reset = (prevResourceType !== resourceType) ||
			(!!endpoint?.length && (endpoint !== endpointType)) ||
			(!!key?.length && (keyword !== key));
		const isTrendingSearch = endpoint === EndpointType.Trending;
		const searchKey = isTrendingSearch ? '' : key || keyword;

		dispatch(ImageActions.setLoading(true));

		try {
			const result = await search(endpoint || endpointType, searchKey, resourceType, props);

			dispatch(ImageActions.load({
				items: result?.data || [],
				totalCount: result?.pagination.total_count ?? 0,
				reset,
			}));

			dispatch(SearchActions.setSearchComplete({resourceType, endpointType: endpoint || endpointType, keyword: searchKey}));
		} catch (e) {
			dispatch(ImageActions.setFailed(e));
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, endpointType, resourceType])

	const onScrollListener = useCallback(async (e: any) => {
		const { scrollHeight, scrollTop, clientHeight } = e.target;
		const nearBottom = scrollHeight - scrollTop;

		if (!isLoading && (nearBottom === clientHeight) && items.length < totalCount) {
			const offset = items.length + 25 + 1;
			await fetchResults(endpointType, tempKeyword, { offset });
		}
	},[fetchResults, isLoading, items.length, endpointType, tempKeyword, totalCount]);

	const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) =>
		setTempKeyword(e.target.value);

	const handleChangeResourceType = async (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(SearchActions.setResourceType(e.target.value as ResourceType));
	}

	const handleSubmit = async () => {
		if (!tempKeyword?.length) {
			return;
		}
		await fetchResults(EndpointType.Search, tempKeyword);
	}

	const handleBrowseTrending = async () => await fetchResults(EndpointType.Trending);

	useEffect(() => {
		(async () => await fetchResults(EndpointType.Trending))();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Wrapper mode={ColorMode.Dark}>
			<Header>
				<Logo/>
				<SearchInput name="keyword" value={tempKeyword} onChange={handleChangeKeyword}/>
				<BrowseButton onClick={handleSubmit} disabled={!tempKeyword}>
					Browse
				</BrowseButton>
				<BrowseButton onClick={handleBrowseTrending}>
					Trending
				</BrowseButton>
				<span>{items.length}</span>
				<ResourceSelector onChange={handleChangeResourceType} />
				<span>found</span>
			</Header>
			<Content onScroll={onScrollListener}>
				<Gallery items={items} noResultsMessage={noResultsMessage} />
			</Content>
		</Wrapper>
	)
};
