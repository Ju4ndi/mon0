import useContext from 'react'
import Context from '../Context/Context.js'

const useCart = () => {
	const { cartItems, setCartItems } = useContext(Context)

	const condition = (cartItem, item) =>
		cartItem.name === item.name && cartItem.size === item.size

	const addItem = ({ item, size }) => {
		const itemToAdd = {
			size,
			...item
		}
		const itemExists = cartItems.some((cartItem) =>
			condition(cartItem, itemToAdd)
		)

		if (itemExists) {
			const newCart = cartItems.map((cartItem) => {
				if (condition(cartItem, itemToAdd)) {
					return {
						...cartItem,
						count: cartItem.count + 1
					}
        }
        
				return cartItem
			})

			setCartItems(newCart)
		} else setCartItems((state) => [...state, { ...itemToAdd, count: 1 }])
	}

	const removeItem = ({ item, size }) => {
		const itemToAdd = {
			size,
			...item
    }
    
		const itemExists = cartItems.some((cartItem) =>
			condition(cartItem, itemToAdd)
		)

		if (itemExists) {
			const newCart = cartItems
				.map((cartItem) => {
					if (condition(cartItem, itemToAdd)) {
						if (cartItem.count > 1) {
					
              return {
								...cartItem,
								count: cartItem.count - 1
							}
						} else return null
          }
          
					return cartItem
				})
				.filter((item) => item !== null)

			setCartItems(newCart)
		}
	}

	const getCartCount = () => {
		const count = cartItems.reduce((count, item) => {
      return count + item.count
		}, 0)

		return count
	}

	const getTotal = () => {
		const total = cartItems.reduce((count, item) => {
			return count + item.unitPrice * item.count
		}, 0)

		return total
	}

	return {
		addItem,
		getTotal,
		cartItems,
		removeItem,
		getCartCount
	}
}
export default useCart
