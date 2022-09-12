import styled from 'styled-components'

const SpaceStyled = styled.div`
	display: block;
	align-self: flex-start;
	width: ${({ width }) => width ?? '100%'};
	min-height: ${({ height }) => height ?? '0rem'};
	background: ${({ background }) => background ?? 'transparent'};
`
export default SpaceStyled
