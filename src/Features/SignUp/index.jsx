import React from 'react'
import SignUpStyled from './styles'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Input from '../../shared/Components/Input'
import Button from '../../shared/Components/Button'
import Spacer from '../../shared/Components/Spacer'
import registerInputData from '../../Utils/registerForm'
import routesConstants from '../../Utils/Constants/routes'
import { globalAttributes, formVariant } from '../../Utils/Variants'

function SignUp() {
	const {
		formState: { errors },
		register,
		handleSubmit
	} = useForm()
	const navigate = useNavigate()

	const onSubmit = (data) => {
		fetch("https://salty-sierra-80251.herokuapp.com/users", {
			method: "POST",
      headers: { "Content-type": "application/json" },
      
      body: JSON.stringify({
        user: {
        name: data.name,
        email: data.email,
        phone: data.phone_number,
        address: data.address,
        password: data.password
        }
      }) 
      
    }).then(data =>  data.json() )
      .then(result =>  {
				if (result.token !== undefined) {
					localStorage.setItem("token", result.token, "email");
					localStorage.setItem("email", result.email)
					console.log("Token accepted!")
          navigate(routesConstants.dashboard);   
        } else {
          navigate('/')
        }
      })
	}

	const generalProps = {
		register,
		err: errors
	}

	return (
    <SignUpStyled { ...globalAttributes } variants={ formVariant }>
      
      <Spacer height='6rem' />
      
			<div className='formContainer'>
             <h3>Crea tu cuenta</h3>

				<form>
				<input type="text" name="name" /><br /><input type="text" name="name" /><br /><input type="text" name="name" /><br /><input type="text" name="name" /><br /><input type="text" name="name" /><br /><input type="text" name="name" /><br />

					{/* <Input { ...generalProps } data={ registerInputData.name } /> */}
          {/* <Input { ...generalProps } data={ registerInputData.email } /> */}
          {/* <Input { ...generalProps } data={ registerInputData.password } /> */}
					{/* <Input { ...generalProps } data={ registerInputData.phone_number } /> */}
					{/* <Input { ...generalProps } data={ registerInputData.address } /> */} 
        </form>
        
				<Button handleClick={ handleSubmit(onSubmit) }>
					Ingresar 
        </Button>

        <Spacer height='2rem' />

        <div className='signIncontainer'>
				<p>Ya tienes cuenta?{' '}
				  <span onClick={() => navigate(routesConstants.signIn)}>Inicia Sesión</span>
				</p>
        </div>

      </div>
		</SignUpStyled>
	)
}
export default SignUp
