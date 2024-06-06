import React, { createContext, useState } from 'react'
import Navbar from './components/Navbar'
import ProductPage from './components/ProductPage'

export const cartItemContext = createContext()
export const zoomContext = createContext()

const App = () => {
	const [cartItem, setCartItem] = useState({
		count: 0,
		name: '',
		rate: '',
	})

	const [showZoom, setShowZoom] = useState(false)

	const handleCartChange = (count, name, rate) => {
		setCartItem({ count, name, rate })
	}

	return (
		<>
			<cartItemContext.Provider value={{ cartItem, handleCartChange }}>
				<zoomContext.Provider value={{ showZoom, setShowZoom }}>
					<ProductPage />
					<Navbar />
				</zoomContext.Provider>
			</cartItemContext.Provider>
		</>
	)
}

export default App
