import React, { useState } from 'react'
import AddressStyled from './styles'
import { useForm } from 'react-hook-form'
import GoBack from './Components/GoBack'
// import Input from '../../shared/Components/Input'
import Button from '../../shared/Components/Button'
import Spacer from '../../shared/Components/Spacer'
// import registerInputData from '../../Utils/registerForm'
import routesConstants from '../../Utils/Constants/routes'
import { globalAttributes, formVariant } from '../../Utils/Variants'

const Address = () => {
	const {
		formState: { errors },
		register,
		handleSubmit
	} = useForm()
  
  const [ setAddress ] = useState()
  const currentUser = { email: localStorage.getItem("email") }

	const onSubmit = (data) => {
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
	}

	const generalProps = {
		register,
		err: errors
	}

	return (
    <AddressStyled { ...globalAttributes } variants={ formVariant }>
      
      <Spacer height='1rem' />
      
				<GoBack  stroke='#000' route={ routesConstants.cart } />
      
      <Spacer height='1rem' />
      
			<div className='formContainer'>
        <h3>Cambiar Ubicación <br /> de pedido</h3>
        
        <Spacer height='2rem' />
        
				<form>
				<br /><input type="text" name="name" /><br />
					{/* <Input { ...generalProps } data={ registerInputData.address } /> */}
        </form>
        
        <Spacer height='2rem' />
        
				<Button width='125%' handleClick={handleSubmit(onSubmit)}>
					Guardar
        </Button>
        
			</div>
		</AddressStyled>
	)
}
export default Address
