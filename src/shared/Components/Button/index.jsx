import React from 'react'
import ButtonStyled from './styles'

function Button({ bg, color, width, height, shadow, padding, children, handleClick }) {
	return (
		<ButtonStyled
      bg={ bg }
      color={ color }
			width={ width }
			shadow={ shadow }
			height={ height }
			padding={ padding }
			onClick={ handleClick }>
			<span>{ children }</span>
		</ButtonStyled>
	)
}
export default Button
