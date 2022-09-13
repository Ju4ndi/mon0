import styled from 'styled-components'

const CardStyled = styled.div`
	width: 100%;
	gap: 0.7rem;
	display: flex;
	min-height: 6.5rem;
	padding: 1rem 1rem;
	align-items: center;
	border-radius: 1.5rem;
	justify-content: space-between;
	background-color: var(--primary-300);
	box-shadow: 0 0.2rem 0.5rem #00000050;

	img {
		width: 4.5rem;
	}

	.textContainer {
    gap: 0.2rem;
		width: 100%;
		display: flex;
		text-align: left;
		flex-direction: column;
		font-size: var(--s-small);

		h5 {
			font-weight: var(--medium);
      font-size: var(--s-normal);
		}

		.itemPrice {
			font-weight: var(--semi);
			color: var(--secondary-100);
		}
	}

	.countContainer {
		display: flex;
		gap: 0.4rem;

		svg {
			cursor: pointer;
			width: 1.4rem;

			&:hover {
				filter: contrast(1.5);
			}
		}
	}
`
export default CardStyled
