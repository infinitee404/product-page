import React, { useContext, useState } from 'react'
import { cartItemContext } from '../App'
import thumbnail from '../assets/image-product-1-thumbnail.jpg'

const CartDetails = () => {
	const { cartItem, handleCartChange } = useContext(cartItemContext)

	const [cartText, setCartText] = useState('Your cart is empty.')

	const handleCheckout = () => {
		cartItem.count === 1 ? setCartText('Your item checked out.') : setCartText('Your items checked out.')
		handleCartChange(0, '', '')
	}
	return (
		<>
			<div className='flex flex-col justify-between'>
				<h3 className='text-lg font-semibold border-b'>Cart</h3>
				<div className='font-bold flex justify-between w-full items-center'>
					{cartItem.count === 0 ? (
						<p className='text-gray-500 mx-auto'>{cartText}</p>
					) : (
						<div className='flex flex-col justify-between h-full w-full'>
							<div className='mt-4 flex font-normal items-center justify-between gap-2'>
								<img
									className='h-12 rounded'
									src={thumbnail}
									alt='item'
								/>
								<div>
									<p className='text-sm'>{cartItem.name}</p>
									<p className='text-sm'>
										${cartItem.rate.toFixed(2)} x {cartItem.count}{' '}
										<span className='font-semibold'>${(cartItem.rate * cartItem.count).toFixed(2)}</span>
									</p>
								</div>
								<div
									onClick={() => handleCartChange(0, '', '')}
									className='cursor-pointer'
								>
									<svg
										width='14'
										height='16'
										className='fill-[#C3CAD9]'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z'
											fill-rule='nonzero'
										/>
									</svg>
								</div>
							</div>
							<button
								onClick={handleCheckout}
								className='rounded-lg w-full mt-4 flex p-2 items-center justify-center bg-[#FF7E1B] hover:bg-[#FFAC6C]'
							>
								Checkout
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

const CartContent = () => {
	return (
		<>
			<div className='max-md:hidden'>
				<div className='cart-component cursor-default absolute top-20 right-0 w-[20rem] bg-white border border-gray-200 shadow-lg p-4 rounded-lg z-10 min-h-[12rem]'>
					<CartDetails />
				</div>
			</div>
			<div className='md:hidden'>
				<div className='cursor-default fixed top-[4.5rem] left-[15vw] w-[70vw] bg-white border border-gray-200 shadow-lg p-4 rounded-lg z-10 min-h-[12rem]'>
					<CartDetails />
				</div>
			</div>
		</>
	)
}

export default CartContent
