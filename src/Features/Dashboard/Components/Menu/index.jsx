import React from 'react'
import { MenuStyled, MenuItemStyled } from './styles'
import { SplideSlide, Splide } from '@splidejs/react-splide'

export const splideOptionsOffers = {
	gap: '1rem',
	perPage: 3,
	arrows: false,
	pagination: false
}

const Menu = ({ current, items, handler }) => {
	return (
	<MenuStyled>
		
      <Splide className='slider' options={splideOptionsOffers}>
	    { items.map((item, i) => (
          <SplideSlide key={i}>

			<MenuItemStyled
				focus={ item.name === current.name }
				onClick={ () => handler(item) }>
				<img src={ item.imgUrl } alt='menu item' />
			</MenuItemStyled>

          </SplideSlide>
		)) }
		</Splide>
		
    </MenuStyled>
	)
}
export default Menu 
