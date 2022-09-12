import React from 'react'
import InitialStyled from './styles'
import { useNavigate } from 'react-router-dom'
import Spacer from '../../shared/Components/Spacer'
import mono from '../../shared/Images/monoLogo.svg'
import Button  from '../../shared/Components/Button'
import routesConstants from '../../Utils/Constants/routes'
import { globalAttributes, loginVariant } from '../../Utils/Variants'

function InitialScreen() {
	const navigate = useNavigate()
	return (
    <InitialStyled { ...globalAttributes } variants={ loginVariant }>
      <Spacer height='2.5rem' />

      <img src={ mono } alt='mono' />

      <Spacer height='2.5rem' />
      <p>Pide tu pizza fácil y rápido! </p>
      
      <Spacer height='3rem' />
      
			<Button width=' 100%' handleClick={ () => navigate(routesConstants.signUp) }>
				Iniciar
      </Button>
      
      <Spacer height='3rem' />
      
		</InitialStyled>
	)
}
export default InitialScreen
