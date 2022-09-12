import React from 'react'
import BillStyled from './styles'
import { useNavigate } from 'react-router-dom'
import routesConstants from '../../../Utils/Constants/routes'
import { ReactComponent as BillView } from '../../../shared/Images/bill.svg'

function Bill({ route, stroke = '#003760' }) {
	const navigate = useNavigate()

	const handleclick = () => {
		const routeExists = Object.values(routesConstants).includes(route)

		if (routeExists) { navigate(route) }
  }
  
	return (
		<BillStyled stroke={ stroke } onClick={ handleclick }>
			<BillView />
		</BillStyled>
	)
}
export default Bill
