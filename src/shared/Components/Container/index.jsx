import React from 'react'
import ContainerStyled from './styles'

function Container({ children }) {
	return (
		<ContainerStyled>
			<div className='container'>{ children }</div>
		</ContainerStyled>
	)
}
export default Container
