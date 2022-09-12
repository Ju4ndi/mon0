import React from 'react'
import PreparingStyled from './styles'
import chef from '../../shared/Images/Chef.svg'
import Bill from '../../shared/Components/Bill'
import HomeIcon from '../../shared/Components/HomeIcon'
import routesConstants from '../../Utils/Constants/routes'
import { globalAttributes, formVariant } from '../../Utils/Variants'

function Preparing() {

  return (
	  <PreparingStyled { ...globalAttributes } variants={ formVariant }>

			<div className="container-photo">
        <img src={ chef } alt='chef' />
      </div>

      <div className='menu'>
        <div className='home'>
  			 	 <HomeIcon route={routesConstants.dashboard} />
  			  	<Bill route={routesConstants.paymentdetails} />
        </div>
	    </div>

		</PreparingStyled>
	)
}
export default Preparing
