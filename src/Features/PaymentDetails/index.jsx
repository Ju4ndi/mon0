import React from 'react'
import PaymentDetailsStyled from '.'
import mono from '../../shared/Images/monoPay.svg'
import GoForward from '../../shared/Components/GoForward'
import routesConstants from '../../Utils/Constants/routes'
import useCart from '../Dashboard/Hooks/useCart.js'
import { globalAttributes, formVariant } from '../../Utils/Variants'

const PaymentDetails = () => {
  const {  getTotal } = useCart()

	return (
		<PaymentDetailsStyled { ...globalAttributes } variants={ formVariant }>
      
			<div className='goForwardContainer'>
				<GoForward route={routesConstants.preparing} />
      </div>

      <div className='menu'>

        <div className="container-photo">
        <p><img src={ mono } /></p>
        </div>

       <div className='text'>

          <h5 className='detail'>¡Tu orden ha sido <br></br>confirmada!</h5>
        
          <div className='priceContainerTotal'>
            <p>${ getTotal() }</p>
          </div>

         <div className='listOne'>

            <div className='priceContainer'>
              <p>Fecha</p>
            </div>
            
            <div className='priceContainer'>
              <p>Usuario</p>
            </div>
            
            <div className='priceContainer'>
              <p>Pedido</p>
            </div>

         </div>

          <div className='line'></div>
        
        <div className='listTwo'>

          <div className='price-details'>
            <p>Pago Total</p>
            <p>${ getTotal() }</p>
          </div>  

          <div className='price-details'>
            <p>Impuesto</p>
            <p>${ getTotal() }</p>
          </div>
          
          <div className='price-details'>
            <p>Domicilio</p>
            <p>${ getTotal() }</p>
          </div>
          
          <div className='price-details'>
            <p>App</p>
            <p>${ getTotal() }</p>
          </div>

        </div>
          <div className='priceContainer2'>
            <p>Total</p>${ getTotal() }
          </div>


        </div>
      </div>

		</PaymentDetailsStyled>
	)
}
export default PaymentDetails
