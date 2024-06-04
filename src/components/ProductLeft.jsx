import { useState } from 'react'
import Modal from 'react-modal'

const modalStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		border: 'none',
		marginRight: '-50%',
		backgroundColor: 'transparent',
		transform: 'translate(-50%, -50%)',
	},
}

import image1 from '../assets/image-product-1.jpg'
import image2 from '../assets/image-product-2.jpg'
import image3 from '../assets/image-product-3.jpg'
import image4 from '../assets/image-product-4.jpg'

import thumbnail1 from '../assets/image-product-1-thumbnail.jpg'
import thumbnail2 from '../assets/image-product-2-thumbnail.jpg'
import thumbnail3 from '../assets/image-product-3-thumbnail.jpg'
import thumbnail4 from '../assets/image-product-4-thumbnail.jpg'

const images = [
	{ main: image1, thumbnail: thumbnail1 },
	{ main: image2, thumbnail: thumbnail2 },
	{ main: image3, thumbnail: thumbnail3 },
	{ main: image4, thumbnail: thumbnail4 },
]

const ProductLeft = () => {
	const [productImage, setProductImage] = useState(image1)
	const [productModal, setProductModal] = useState(false)

	const handleImageChange = (imageName) => {
		setProductImage(imageName)
	}

	const openModal = () => {
		setProductModal(true)
	}
	const closeModal = () => {
		setProductModal(false)
	}
	return (
		<div className='w-[25rem] flex flex-col'>
			<div
				onClick={openModal}
				className='h-[25rem]'
			>
				<img
					className='md:rounded-[1rem]'
					src={productImage}
					alt='Selected product'
				/>
			</div>
			<div className='max-md:hidden flex mt-10 justify-between'>
				{images.map(({ main, thumbnail }) => (
					<div
						key={main}
						className='relative'
					>
						<div className='group relative'>
							<img
								className='h-20 rounded-lg border'
								src={thumbnail}
								alt='Product thumbnail'
							/>
							<div
								onClick={() => handleImageChange(main)}
								className='absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg cursor-pointer'
							></div>
						</div>
						{productImage === main && (
							<div className='absolute top-0 left-0 w-full h-full border-2 border-[#FF7E1B] bg-white bg-opacity-50 rounded-lg cursor-pointer'></div>
						)}
					</div>
				))}
			</div>
			<div>
				<Modal
					isOpen={productModal}
					onRequestClose={closeModal}
					style={modalStyles}
					shouldCloseOnOverlayClick={false}
				>
					<div className='relative pt-8'>
						<div
							onClick={closeModal}
							className='absolute top-0 right-0 text-white  cursor-pointer text-5xl font-bold'
						>
							<svg
								width='28'
								height='30'
								viewBox='0 0 21 22'
								className='fill-[#69707D] hover:fill-[#FF7E1B]'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
									fill-rule='evenodd'
								/>
							</svg>
						</div>
						<div className='relative w-[25rem] flex flex-col'>
							<div className='h-[30rem]'>
								<img
									className='md:rounded-[1rem] h-[30rem]'
									src={productImage}
									alt='Selected product'
								/>
							</div>
							<div className='max-md:hidden flex mt-10 justify-between'>
								{images.map(({ main, thumbnail }) => (
									<div
										key={main}
										className='relative'
									>
										<div className='group relative'>
											<img
												className='h-20 rounded-lg border'
												src={thumbnail}
												alt='Product thumbnail'
											/>
											<div
												onClick={() => handleImageChange(main)}
												className='absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg cursor-pointer'
											></div>
										</div>
										{productImage === main && (
											<div className='absolute top-0 left-0 w-full h-full border-2 border-[#FF7E1B] bg-white bg-opacity-50 rounded-lg cursor-pointer'></div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</Modal>
			</div>
		</div>
	)
}

export default ProductLeft
