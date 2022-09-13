import styled from 'styled-components'

export const FloatingButtonsStyled = styled.div`
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 1.5rem;
	width: 90%;

	div {
		display: flex;
		width: 3.2rem;
		height: 3.2rem;
		align-items: center;
		border-radius: 0.9rem;
		justify-content: center;
	}

	timer {
		width: 15%;
	  height: 70%;
	}
`

export const CardIconStyled = styled.div`
	cursor: pointer;
	position: relative;

	svg {
		width: 2.2rem;
		height: 2.2rem;
	}

	&:hover {
		filter: contrast(1.4);
	}
  
	&::after {
    top: 1%;
    right: 0rem;
		height: 1rem;
		width: 1.2rem;
		position: absolute;
		border-radius: 50%;
		padding-top: 0.2rem;
		align-items: center;
		color: var(--gray-300);
		justify-content: center;
		font-size: var(--s-small);
		box-shadow: 0 0.2rem 1rem #00000050;
		background-color: var(--secondary-100);
		display: ${({ count }) => (count ? 'flex' : 'none')};
		content: '${({ count }) => count?.toString() ?? ''}';
	}
`
