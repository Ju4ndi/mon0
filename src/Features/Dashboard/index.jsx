import React from 'react'
import DashboardStyled from './styles'
import Menu from './Components/Menu'
import Item from './Components/Item'
import useItems from './Hooks/useItems.js'
import Button from '../../shared/Components/Button'
import routesConstants from '../../Utils/Constants/routes'
import { globalAttributes, formVariant } from '../../Utils/Variants'
import  FloatingButtons  from '../../shared/Components/FloatingButtons'

function Dashboard() {
	const { items, setCurrentItem, currentItem } = useItems()

	return (
	  <DashboardStyled { ...globalAttributes } variants={ formVariant }>
      
			<FloatingButtons type='cart' />

      <div className='itemsContainer'>
		    <div className='selectElementContainer'>
						<Item item={ currentItem.sizes.Small } />
						<Item item={ currentItem.sizes.Medium } />
						<Item item={ currentItem.sizes.Large } />
        </div>
      </div>

      <div className='menu'>
        <div className='detail'>{currentItem.name}</div>
        <div className='details'>{currentItem.detail}</div>

        <Menu current={currentItem} handler={setCurrentItem} items={items} />
         
				  <div className='button'>
		      		<Button  width='100%' shadow handleClick={ () => navigate(routesConstants.cart) }>
		     			Hacer pedido
         		  </Button>
		      </div>
					
	    </div>

		</DashboardStyled>
	)
}
export default Dashboard 
