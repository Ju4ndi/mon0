import React from 'react'
import CardStyled from './styles'
import useCart from '../../../Dashboard/Hooks/useCart.js'
import { ReactComponent as LessIcon } from '../../../../shared/Images/lessIcon.svg'
import { ReactComponent as PlusIcon } from '../../../../shared/Images/plusIcon.svg'

function Card({ item }) {
	const { addItem, removeItem } = useCart()
	return (
		<CardStyled>
      <img src={ item.imgUrl } alt='pizza' />
      
			<div className='textContainer'>
				<h5>Pizza</h5>
				<p className='itemType'>{ `${ item.size } ${ item.name }` }</p>
				<p className='itemPrice'>{ '$' + item.unitPrice * item.count }</p>
      </div>
      
			<div className='countContainer'>
				<LessIcon onClick={ () => removeItem({ item, size: item.size }) } />
				{ item.count }
				<PlusIcon onClick={ () => addItem({ item, size: item.size }) } />
      </div>
      
		</CardStyled>
	)
}
export default Card
