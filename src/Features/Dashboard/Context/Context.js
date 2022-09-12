import React from 'react'
import { createContext, useState } from 'react'
import items from '../../../Utils/Data/pizzas.json'

const Context = createContext()

const ContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([])
	const [currentItem, setCurrentItem] = useState(items[0])

	return (
		<Context.Provider
			value={ { cartItems, currentItem, setCartItems, setCurrentItem } }>
			{ children }
		</Context.Provider>
	)
}
export default ContextProvider
