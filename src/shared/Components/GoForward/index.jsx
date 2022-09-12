import React from 'react'
import GoForwardStyled from '.'
import { useNavigate } from 'react-router-dom'
import routesConstants from '../../../Utils/Constants/routes'
import { ReactComponent as GoForwardIcon } from '../../../shared/Images/goForward.svg'

const GoForward = ({ route, stroke = '#003760' }) => {
	const navigate = useNavigate()

	const handleclick = () => {
		const routeExists = Object.values(routesConstants).includes(route)

		if (routeExists) { navigate(route) }
  }
  
	return (
		<GoForwardStyled stroke={ stroke } onClick={ handleclick }>
			<GoForwardIcon />
		</GoForwardStyled>
	)
}
export default GoForward
