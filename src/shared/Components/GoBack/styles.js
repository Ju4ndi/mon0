import styled from 'styled-components'

const GoBackStyled = styled.div`
	width: 15%;
	height: 70%;
	display: flex;
	cursor: pointer;
	align-items: center;
	border-radius: 0.9rem;
	justify-content: center;
	box-shadow: 0 0 1rem #00000050;

	svg {
		width: 90%;
		height: 40%;
		margin-left: -0.1rem;

		path { stroke: ${({ stroke }) => stroke } }
	}

	&:hover { filter: contrast(1.9) }
`
export default GoBackStyled
