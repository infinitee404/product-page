import React, { useContext, useEffect, useState } from 'react'
import CartContent from './CartContent'

import Logo from '../assets/logo.svg'
import Avatar from '../assets/image-avatar.png'

const Navbar = () => {
	const [cartVisible, setCartVisible] = useState(false)
	const [mobileMenu, setMobileMenu] = useState(false)

	const showCart = () => {
		setCartVisible(true)
	}

	const hideCart = () => {
		setCartVisible(false)
	}

	useEffect(() => {
		console.log('showing')
	}, [mobileMenu])
	return (
		<nav className='border-b border-[#00000040] fixed top-0 left-1/2 -translate-x-[50%] w-full h-[6rem] flex items-center justify-between max-w-[1200px] mx-auto px-4'>
			<div className='select-none relative flex justify-between items-center h-full pl-16 md:pl-0'>
				<div
					onClick={() => setMobileMenu((prevShow) => !prevShow)}
					className='cursor-pointer absolute left-0 text-4xl'
				>
					🍔
				</div>
				<img
					className='h-[20px]'
					src={Logo}
				/>
				<ul className='flex h-full max-md:hidden'>
					<li className='ml-4 mr-2 cursor-pointer px-2 flex items-center border-b-[4px] border-transparent hover:border-[#FF7E1B]'>
						Collections
					</li>
					<li className='mr-2 cursor-pointer px-2 flex items-center border-b-[4px] border-transparent hover:border-[#FF7E1B]'>Men</li>
					<li className='mr-2 cursor-pointer px-2 flex items-center border-b-[4px] border-transparent hover:border-[#FF7E1B]'>Women</li>
					<li className='mr-2 cursor-pointer px-2 flex items-center border-b-[4px] border-transparent hover:border-[#FF7E1B]'>About</li>
					<li className='cursor-pointer px-2 flex items-center border-b-[4px] border-transparent hover:border-[#FF7E1B]'>Contact</li>
				</ul>
			</div>
			<div className='flex h-full justify-between items-center'>
				<div
					onMouseEnter={showCart}
					onMouseLeave={hideCart}
					className='relative flex p-8 align-center justify-center hover:cursor-pointer'
				>
					<svg
						width='22'
						height='20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
							fill='#1f2937'
							fillRule='nonzero'
						/>
					</svg>
					{cartVisible && <CartContent />}
				</div>
				<img
					className='h-12 rounded-full border-[2px] border-transparent hover:border-[#FF7E1B] hover:outline-none cursor-pointer'
					src={Avatar}
				/>
			</div>
		</nav>
	)
}

export default Navbar
