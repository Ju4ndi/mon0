import useContext from 'react'
import Context from '../Context/Context.js'
import items from '../../../utils/data/pizzas.json'

const useItems = () => {
	const { setCurrentItem, currentItem, cartItems } = useContext(Context)

	const getCount = ({ size }) => {
		const result = cartItems.filter(
			(cartItem) => cartItem.name === currentItem.name && cartItem.size === size
    )
    
		if (result.length > 0) return result[0].count
		return null
	}

	return { items, setCurrentItem, currentItem, getCount }
}
export default useItems
