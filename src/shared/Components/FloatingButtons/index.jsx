import React from 'react'
import { useNavigate } from 'react-router-dom'
import Timer from '../../../shared/Images/Timer.svg'
import CartIcon from '../../../shared/Images/cartIcon.svg'
import routesConstants from '../../../Utils/Constants/routes'
import { CardIconStyled, FloatingButtonsStyled } from './styles'
import useCart from '../../../Features/Dashboard/Hooks/useCart.js'

function FloatingButtons({ type }) {
	const navigate = useNavigate()
	const { getCartCount } = useCart()

	return (
		<FloatingButtonsStyled>
			
			<div
				className='timer'
				onClick={() => navigate(routesConstants.preparing)}>
				<Timer />
			</div>

			{ type === 'cart' && (
				<CardIconStyled
					onClick={ () => navigate(routesConstants.cart) }
					count={ getCartCount() }>
					<CartIcon />
				</CardIconStyled>
      ) }
      
			{ type === 'chat' && (
				<div>
					<CartIcon />
				</div>
      ) }
      
		</FloatingButtonsStyled>
	)
}
export default FloatingButtons
