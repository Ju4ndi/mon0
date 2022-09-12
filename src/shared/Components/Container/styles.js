import styled from 'styled-components'

const ContainerStyled = styled.div`
	width: 100%;
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-start;

	.container {
		top: 0;
    left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		height: 100%;
		position: fixed;
		overflow: hidden;
		aspect-ratio: var(--aspect-ratio);
		max-height: var(--max-height-container);
	}
`
export default ContainerStyled
