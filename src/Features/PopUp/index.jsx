import React from 'react'
import PopUpStyled from './styles'
import end from '../../shared/Images/End.svg'
import { useNavigate } from 'react-router-dom'
import Button from '../../shared/Components/Button'
import routesConstants from '../../Utils/Constants/routes'
import { globalAttributes, formVariant } from '../../Utils/Variants'

function PopUp() {
  const navigate = useNavigate()

  return (
	  <PopUpStyled { ...globalAttributes } variants={ formVariant }>

			<div className="container-photo">
        <img src={ end } alt='end' />
				<Button width=' 100%' handleClick={ () => navigate(routesConstants.dashboard) }>
				Volver al inicio
      </Button>
      </div>

		</PopUpStyled>
	)
}
export default PopUp
