import styled from 'styled-components'

const ButtonStyled = styled.button`
	border: none;
	display: flex;
	outline: none;
	cursor: pointer;
	align-items: center;
    font-family: Poppins;
	border-radius: 1.5rem;
    transform: scale(0.8);
	justify-content: center;
	width: ${({ width }) => width ?? '130%'};
	height: ${({ height }) => height ?? '0'};
	padding: ${({ padding }) => padding ?? '1.2rem 0'};
	background-color: ${({ bg }) => bg ?? 'var(--secondary-100)'};
	box-shadow: ${({ shadow }) => (shadow ? '0 0 0.5rem #00000050' : 'none')};


	span {
		font-size: var(--s-medium);
		color: ${({ color }) => color ?? 'var(--gray-300)'};
	}

	&:hover {
		background-color: ${({ bg }) => bg ?? 'var(--secondary-200)'};
	}

	:active {
		transform: scale(0.85);
	}

  font {
    font-family: Poppins;
  }
`
export default ButtonStyled
