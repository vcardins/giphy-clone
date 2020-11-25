interface Heading {
	h1: string;
	h2: string;
	h3: string;
	h4: string;
	h5: string;
	h6: string;
}

interface Spacing {
	none: number;
	mini: string;
	small: string;
	normal: string;
	medium: string;
	large: string;
	larger: string;
	largest: string;
}

interface Sizes {
	radius: string;
	header: string;
	titleBar: string;
	toolBar: string;
}

interface Fonts {
	primary: string;
	pre: string;
}

interface Colors {
	primary: string;
	secondary: string;
	tertiary: string;
	dark: string;
	bright: string;
}

export interface ITheme {
	colors: Colors;
	fonts: Fonts;
	sizes: Sizes;
	fontSizes: number[];
	space: number[];
	spacing: Spacing;
	heading: Heading;
}
