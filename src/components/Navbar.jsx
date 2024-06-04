import React from 'react'

import Logo from '../assets/logo.svg'
import Cart from '../assets/icon-cart.svg'
import Avatar from '../assets/image-avatar.png'

const Navbar = () => {
	return (
		<nav className='border-b border-[#00000040] top-0 w-full h-[6rem] flex items-center justify-between max-w-[1200px] mx-auto px-4'>
			<div className='flex justify-between items-center h-full'>
				<img
					className='h-[20px]'
					src={Logo}
				/>
				<ul className='flex h-full max-md:hidden'>
					<li className='ml-4 mr-2 cursor-pointer px-2 flex items-center border-b-[4px] border-transparent hover:border-[#FF7E1B]'>Collections</li>
					<li className='mr-2 cursor-pointer px-2 flex items-center border-b-[4px] border-transparent hover:border-[#FF7E1B]'>Men</li>
					<li className='mr-2 cursor-pointer px-2 flex items-center border-b-[4px] border-transparent hover:border-[#FF7E1B]'>Women</li>
					<li className='mr-2 cursor-pointer px-2 flex items-center border-b-[4px] border-transparent hover:border-[#FF7E1B]'>About</li>
					<li className='cursor-pointer px-2 flex items-center border-b-[4px] border-transparent hover:border-[#FF7E1B]'>Contact</li>
				</ul>
			</div>
			<div className='flex justify-between items-center'>
				<img
					className='h-5 mr-8 hover:cursor-pointer'
					src={Cart}
				/>
				<img
					className='h-12 rounded-full border-[2px] border-transparent hover:border-[#FF7E1B] hover:outline-none cursor-pointer'
					src={Avatar}
				/>
			</div>
		</nav>
	)
}

export default Navbar
