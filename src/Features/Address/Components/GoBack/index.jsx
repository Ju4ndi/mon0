import React from 'react'
import GoBackStyled from './styles'
import { useNavigate } from 'react-router-dom'
import routesConstants from '../../../../Utils/Constants/routes'
import { ReactComponent as GoBackIcon } from '../../../../shared/Images/goBack.svg'

const GoBack = ({ route, stroke = '#003760' }) => {
	const navigate = useNavigate()

	const handleclick = () => {
		const routeExists = Object.values(routesConstants).includes(route)

		if (routeExists) { navigate(route) }
  }
  
	return (
		<GoBackStyled stroke={ stroke } onClick={ handleclick }>
			<GoBackIcon />
		</GoBackStyled>
	)
}
export default GoBack
