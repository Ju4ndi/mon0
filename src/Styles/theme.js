import { css } from 'styled-components'

export const theme = css`
	:root {
    --font-family: Poppins;
		--gray-100: #16181d;
		--gray-200: #a3a3a3;
		--gray-300: #ffffff;
		--primary-100: #363636;
		--primary-200: #003760;
		--primary-300: #e7eef3;
		--secondary-100: #f77f00;
		--secondary-200: #df7300;
		--secondary-300: #f77f0095;
		--background-color: #e5e5e5;
	}
`
export const sizes = css`
	:root {
		--aspect-ratio: none;
		--border-radius-screen: 0;
		--max-width-container: 100%;
		--max-height-container: 100%;
	}

	@media (min-width: 415px) {
		:root {
			--aspect-ratio: 0.5;
			--border-radius-screen: 1rem;
			--max-width-container: 415px;
			--max-height-container: 65rem;
		}
	}
`

export const fonts = css`
	/* font size */
	:root {
    --font-family: Poppins;
		--font-size-global: 4vw;
		--h1: 2.5rem;
		--h2: 1.7rem;
		--h3: 1.5rem;
		--h4: 1.3rem;
		--h5: 1.1rem;
		--s-medium: 1rem;
		--s-normal: 0.8rem;
		--s-small: 0.75rem;
	}

	@media (min-width: 415px) {
		:root {
			--font-size-global: 16px;
		}
	}

	:root {
    --bold: 700;
		--semi: 600;
		--light: 300;
		--medium: 500;
		--regular: 400;
	}
`
