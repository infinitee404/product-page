// src/CartContent.jsx
import React from 'react'

const CartContent = ({ items }) => {
	return (
		<div className='absolute top-20 w-64 bg-white border border-gray-200 shadow-lg p-4 rounded-lg z-5 min-h-[12rem]'>
			<h3 className='text-lg font-semibold border-b'>Cart</h3>
			<div className='h-[8rem] font-bold flex justify-center items-center'>
				{items.length === 0 ? (
					<p className='text-gray-500'>Your cart is empty.</p>
				) : (
					<ul className='space-y-2'>
						{items.map((item, index) => (
							<li
								key={index}
								className='flex justify-between items-center'
							>
								<span className='text-gray-700'>{item.name}</span>
								<span className='text-gray-900 font-medium'>${item.price}</span>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default CartContent
