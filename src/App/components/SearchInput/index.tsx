import React from 'react';
import styled from 'styled-components';

export const Input = styled.input`
	padding: 0em 1em;
`;

export const SearchInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
	<Input type="text" {...props}/>
);
