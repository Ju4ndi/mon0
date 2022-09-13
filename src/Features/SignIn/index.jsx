import React from 'react'
import SignInStyled from './styles'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
// import Input from '../../shared/Components/Input'
import GoBack from '../../shared/Components/GoBack'
import Button from '../../shared/Components/Button'
import Spacer from '../../shared/Components/Spacer'
// import signInInputData from '../../Utils/signInForm'
import routesConstants from '../../Utils/Constants/routes'
import { globalAttributes, formVariant } from '../../Utils/Variants'

const SignIn = () => {
	const {
		formState: { errors },
		register,
		handleSubmit
  } = useForm()
  
	const navigate = useNavigate()

  const onSubmit = (data) => {
    fetch("https://salty-sierra-80251.herokuapp.com/users/sign_in", {
      method:"GET",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      }),
    })
      .then((resp) =>  resp.json())
      .then(data => {
        localStorage.setItem("token", data.token)
        navigate(routesConstants.dashboard)
      })
    
    //  navigate(routesConstants.dashboard)
	}
	
	const generalProps = {
		register,
		err: errors
	}

	return (
    <SignInStyled {...globalAttributes} variants={formVariant}>
      
      <Spacer height='1.5rem' />
      
			<div className='goBackContainer'>
				<GoBack stroke='#fff' route={routesConstants.cart} />
      </div>
      
			<Spacer height='1rem' />

			<div className='formContainer'>
        

        <h3>Que estás esperando para ingresar? <br></br>Vamos.</h3>
        
        <Spacer height='1rem' />

				<form>
        <br /><input type="text" name="name" /><br /><br /><input type="text" name="name" /><br />
					{/* <Input { ...generalProps } data={ signInInputData.email } />
					<Input { ...generalProps } data={ signInInputData.password } /> */}
        </form>
        
        <Spacer height='3rem' />

        <Button handleClick={handleSubmit(onSubmit)}>
					Ingresar 
        </Button>
        
        <Spacer height='2rem' />
        
				<div className='signUpcontainer'>
					<p>
						Nuevo en MonoPizza? 
						<span onClick={() => navigate(routesConstants.signUp)}>
							 Crea tu cuenta
						</span>
					</p>
        </div>
        
			</div>
		</SignInStyled>
	)
}
export default SignIn
