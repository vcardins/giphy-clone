import React from 'react';
import styled from 'styled-components';

import { ResourceType } from '../../types';

const Select = styled.select``;

export const ResourceSelector = React.memo((props: React.SelectHTMLAttributes<HTMLSelectElement>) => (
	<Select {...props}>
		{Object.keys(ResourceType).map((key) => (
			<option key={key} value={key.toLowerCase()}>{key}</option>
		))}
	</Select>
));
