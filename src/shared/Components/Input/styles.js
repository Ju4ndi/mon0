import styled from 'styled-components'

const InputStyled = styled.label`
	width: 100%;
	display: flex;
	flex-direction: column;

	span {
		text-align: left;
		padding-left: 1rem;
		font-size: var(--s-small);
		color: var(--secondary-100);
	}

	.inputContainer {
		width: 100%;
		height: 2.2rem;
		border-radius: 1rem;
		background-color: var(--gray-300);

		input {
      width: 100%;
			height: 100%;
			border: none;
			outline: none;
			display: block;
			padding-left: 1rem;
			border-radius: 1rem;
      font-family: Poppins;
			color: var(--gray-200);
			background-color: inherit;
			text-transform: var(--input-text-transform);

			&::placeholder {
				color: var(--gray-200);
				font-size: var(--s-small);
			}

		}
	}

	.warningText {
		width: 100%;
		height: 0.8rem;
		text-align: right;
		font-size: var(--s-small);
		color: var(--secondary-200);
	}
`
export default InputStyled
