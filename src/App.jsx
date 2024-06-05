import React, { createContext, useState } from 'react'
import Navbar from './components/Navbar'
import ProductPage from './components/ProductPage'

export const cartItemContext = createContext()

const App = () => {
	const [cartItem, setCartItem] = useState({
		count: 0,
		name: '',
		rate: '',
	})

	const handleCartChange = (count, name, rate) => {
		setCartItem({ count, name, rate })
	}

	return (
		<>
			<cartItemContext.Provider value={{ cartItem, handleCartChange }}>
				<Navbar />
				<ProductPage />
			</cartItemContext.Provider>
		</>
	)
}

export default App
