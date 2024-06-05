import React, { useState } from 'react'
import ProductLeft from './ProductLeft'

const Products = [
    {
        price: '250',
        discountPercent: '50',
    }
]
const ProductPage = () => {
	const [productCount, setProductCount] = useState(0)

    const sendToCart = () =>{
        console.log('sending ',productCount, 'to cart')
        setProductCount(0)
    }

	return (
		<main
			style={{ height: `calc(100vh - 6rem)` }}
			className='w-full flex max-md:flex-col max-w-[1000px] justify-between mx-auto items-center'
		>
			<ProductLeft />
			<div className='max-w-[22rem]'>
				<div className='text-gray-600 font-semibold uppercase mb-4'>Sneaker Company</div>
				<h1 className='text-gray-800 text-4xl font-extrabold mb-8'>Fall Limited Edition Sneakers</h1>
				<p className='text-gray-400 mb-4'>
					These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand
					everything the weather can offer.
				</p>
				<div className='flex items-center mb-4'>
					<span className='font-bold text-3xl'>$125.00</span>
					<span className='bg-gray-800 rounded text-white font-semibold px-2 ml-4'>50%</span>
				</div>
				<p className='text-gray-600 line-through'>$250.00</p>
				<div className='flex h-[4rem]'>
					<div className='flex justify-evenly w-[16rem] items-center mr-8 select-none'>
						<div
							className='icon-parent flex justify-center items-center h-full w-full cursor-pointer'
							onClick={() => setProductCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0))}
						>
							<svg
								width='12'
								height='4'
								className='fill-[#FF7E1B]'
								xmlns='http://www.w3.org/2000/svg'
							>
								<defs>
									<path
										d='M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z'
										id='a'
									/>
								</defs>
								<use
									fillRule='nonzero'
									href='#a'
								/>
							</svg>
						</div>
						<span className='w-24 h-full flex items-center justify-center font-bold'>{productCount}</span>
						<div
							className='icon-parent flex justify-center items-center h-full w-full cursor-pointer'
							onClick={() => setProductCount((prevCount) => prevCount + 1)}
						>
							<svg
								width='12'
								height='12'
								className='fill-[#FF7E1B]'
								xmlns='http://www.w3.org/2000/svg'
							>
								<defs>
									<path
										d='M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z'
										id='b'
									/>
								</defs>
								<use
									fillRule='nonzero'
									href='#b'
								/>
							</svg>
						</div>
					</div>

					<button 
                    onClick={()=> sendToCart()}
                    className='rounded-lg w-full flex items-center justify-center bg-[#FF7E1B] hover:bg-[#FFAC6C]'>
						<div className='mr-4'>
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
						</div>
						<span className='text-gray-800 font-bold'>Add to Cart</span>
					</button>
				</div>
			</div>
		</main>
	)
}

export default ProductPage
