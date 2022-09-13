import CartStyled from './styles'
import Card from './Components/Card'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import location from '../../shared/Images/location.svg'
import Button from '../../shared/Components/Button'
import GoBack from '../../shared/Components/GoBack'
import routesConstants from '../../Utils/Constants/routes'
import useCart from '../../Features/Dashboard/Hooks/useCart.js'
import { globalAttributes, formVariant } from '../../Utils/Variants'

function Cart() {
  const navigate = useNavigate()
  const { cartItems, getTotal } = useCart()
  const [ address, setAddress ] = useState()

  const handleRandom = () => Math.floor(Math.random() * 100000000)
  
  const currentUser = { email: localStorage.getItem("email") }
  
  const URL = 'https://salty-sierra-80251.herokuapp.com/informations/information'
	
  fetch(URL, { 
      method: "POST",
      headers: { "Content-type": "application/json" }, 
      body: JSON.stringify({ user: currentUser }),
		}).then((data) => data.json() ).then((result) => {
      setAddress(result.message)
    }).catch(error => {
      console.log(error)
    })

    return (
		<CartStyled { ...globalAttributes } variants={ formVariant }>
      <br />
			<div className='goBackContainer'>
				<GoBack route={ routesConstants.dashboard } />
      </div>
    
      <div className='cartList'>

        <p className='address'><img height='250%'src={ location } />  
          <h3 className='titlee'>Dirección</h3>
        </p>
        
        <p className='container-text'>{ address }
        <span className='color-address' onClick={ () => navigate(routesConstants.address) }>¿Cambiar?</span>
        </p>

        <div className='underline'></div> 
        
        <div className='title'>
					<h5>Tu pedido</h5>
        </div>

				<div className='itemsContainer'>
					{ cartItems.length === 0 && <p>Tu carrito está vacío...</p> }
					{ cartItems.map((item, i) => (
						<Card key={ i } item={ item } />
					)) }
        </div>
        
        <div className='list'>
        <div className='priceContainer'>
					<p>Impuesto</p>
					<p className='price'>${ getTotal() }</p>
        </div>
        
        <div className='priceContainer'>
					<p>Domicilio</p>
					<p className='price'>${ getTotal() }</p>
        </div>
        
        <div className='priceContainer'>
					<p>App</p>
					<p className='price'>${ getTotal() }</p>
        </div>

				<div className='priceContainer2'>
					<p>Total</p>
					<p className='price'>${ getTotal() }</p>
        </div>
        </div>

        <div className='box'>
			   <form action="https://checkout.wompi.co/p/" method="GET">
           <Button width='10rem' shadow height='3rem' >Pagar</Button>
           <input type="hidden" name="public-key" value="pub_test_2yyekyU7CyfAvje3rtAQgHzYcE7nhYLl" />
           <input type="hidden" name="currency" value="COP" />
           <input type="hidden" name="amount-in-cents" value={ getTotal() } />
           <input type="hidden" name="reference" value={'AD' + handleRandom()} />

            {/* <input type="hidden" name="customer-data:email" value={email} />
            <input type="hidden" name="customer-data:full-name" value={ data.name } />
            <input type="hidden" name="customer-data:phone-number" value={ data.phone_number } />
          */}
          </form>
        </div>
        
      </div>
		</CartStyled>
	)
}
export default Cart
