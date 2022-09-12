import React from 'react'
import SendingStyled from './styles'
import Bill from '../../shared/Components/Bill'
import HomeIcon from '../../shared/Components/HomeIcon'
import routesConstants from '../../Utils/Constants/routes'
import deliveryImage from '../../shared/Images/Delivery.svg'
import { globalAttributes, formVariant } from '../../Utils/Variants'

function Sending() {

  return (
	  <SendingStyled { ...globalAttributes } variants={ formVariant }>
			<div className="container-photo">
        <img src={ deliveryImage } alt='deliveryImage' />
      </div>

      <div className='menu'>

        <div className='home'>
  			 	  <HomeIcon route={routesConstants.dashboard} />
  			  	<Bill route={routesConstants.paymentdetails} />
        </div>

	    </div>

		</SendingStyled>
	)
}
export default Sending
