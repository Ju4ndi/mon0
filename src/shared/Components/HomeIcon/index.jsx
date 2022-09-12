import React from 'react'
import HomeIconStyled from '.'
import { useNavigate } from 'react-router-dom'
import routesConstants from '../../../Utils/Constants/routes'
import { ReactComponent as Icon } from '../../Images/homeIcon.svg'

const HomeIcon = ({ route, stroke = '#003760' }) => {
	const navigate = useNavigate()

	const handleclick = () => {
		const routeExists = Object.values(routesConstants).includes(route)

		if (routeExists) { navigate(route) }
  }
  
	return (
		<HomeIconStyled stroke={ stroke } onClick={ handleclick }>
			<Icon />
		</HomeIconStyled>
	)
}
export default HomeIcon
