import { useContext, useState } from 'react'
import Modal from 'react-modal'
import { zoomContext } from '../App'

import image1 from '../assets/image-product-1.jpg'
import image2 from '../assets/image-product-2.jpg'
import image3 from '../assets/image-product-3.jpg'
import image4 from '../assets/image-product-4.jpg'

import thumbnail1 from '../assets/image-product-1-thumbnail.jpg'
import thumbnail2 from '../assets/image-product-2-thumbnail.jpg'
import thumbnail3 from '../assets/image-product-3-thumbnail.jpg'
import thumbnail4 from '../assets/image-product-4-thumbnail.jpg'

const modalStyles = {
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
	},
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

const images = [
	{ main: image1, thumbnail: thumbnail1 },
	{ main: image2, thumbnail: thumbnail2 },
	{ main: image3, thumbnail: thumbnail3 },
	{ main: image4, thumbnail: thumbnail4 },
]

const ProductLeft = () => {
	const { showZoom, setShowZoom } = useContext(zoomContext)
	const [productImage, setProductImage] = useState(image1)
	const [productModal, setProductModal] = useState(false)
	const [modalImage, setModalImage] = useState()
	const [coords, setCoords] = useState({ x: 0, y: 0 })

	const handleImageChange = (value) => {
		const currentIndex = images.findIndex((image) => image.main === productImage)
		let newIndex = currentIndex + value

		if (newIndex < 0) {
			newIndex = images.length - 1
		} else if (newIndex >= images.length) {
			newIndex = 0
		}

		setProductImage(images[newIndex].main)
	}

	const handleModalImageChange = (imageName) => {
		setModalImage(imageName)
	}

	const handleModalNavigate = (value) => {
		const currentIndex = images.findIndex((image) => image.main === modalImage)
		let newIndex = currentIndex + value

		if (newIndex < 0) {
			newIndex = images.length - 1
		} else if (newIndex >= images.length) {
			newIndex = 0
		}

		setModalImage(images[newIndex].main)
	}

	const openModal = () => {
		setModalImage(productImage)
		setProductModal(true)
	}

	const closeModal = () => {
		setProductModal(false)
	}

	const handleMouseMove = (event) => {
		const rect = event.currentTarget.getBoundingClientRect()
		const centerX = rect.width / 2
		const centerY = rect.height / 2
		const x = event.clientX - rect.left - centerX
		const y = event.clientY - rect.top - centerY
		console.log(`X: ${x}, Y: ${y}`)
	}

	return (
		<div className='relative w-[25rem] select-none flex flex-col'>
			<div className='relative flex items-center justify-center mb-8 md:mb-0'>
				<div
					onClick={() => handleImageChange(-1)}
					className='md:hidden absolute cursor-pointer top-1/2 z-1 left-4 rounded-full flex justify-center items-center h-10 w-10 bg-white border border-black -translate-y-1/2 '
				>
					<svg
						width='12'
						height='18'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M11 1 3 9l8 8'
							stroke='#1D2026'
							stroke-width='3'
							fill='none'
							fill-rule='evenodd'
						/>
					</svg>
				</div>
				<div className='relative'>
					<img
						onClick={openModal}
						onMouseEnter={() => setShowZoom(true)}
						onMouseLeave={() => setShowZoom(false)}
						onMouseMove={handleMouseMove}
						className='md:rounded-[1rem] max-md:h-[20rem] cursor-zoom-in'
						src={productImage}
						alt='Selected product'
					/>
					{showZoom && (
						<div className='absolute overflow-hidden translate-x-[125%] top-0 right-0 h-[33rem] w-[33rem] bg-green-500 z-10'>
							<img
                            style={{
                                height: '33rem',
                                width: '33rem',
                                top: '',
                                left: ''
                            }}
								className='scale-[3]'
								src={productImage}
								alt='zoomed image'
							/>
						</div>
					)}
				</div>
				<div
					onClick={() => handleImageChange(1)}
					className='md:hidden absolute cursor-pointer top-1/2 z-1 right-4 rounded-full flex justify-center items-center h-10 w-10 bg-white border border-black -translate-y-1/2'
				>
					<svg
						width='13'
						height='18'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='m2 1 8 8-8 8'
							stroke='#1D2026'
							stroke-width='3'
							fill='none'
							fill-rule='evenodd'
						/>
					</svg>
				</div>
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
				>
					<div className='relative pt-8 select-none'>
						<div
							onClick={closeModal}
							className='absolute top-0 right-0 text-white cursor-pointer text-5xl font-bold'
						>
							<svg
								width='28'
								height='30'
								viewBox='0 0 10 20'
								className='fill-[#FFFFFF] hover:fill-[#FF7E1B]'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
									fill-rule='evenodd'
								/>
							</svg>
						</div>
						<div className='relative flex flex-col'>
							<div className='relative h-[35rem]'>
								<div
									onClick={() => handleModalNavigate(-1)}
									className='absolute cursor-pointer top-1/2 rounded-full flex justify-center items-center h-10 w-10 bg-white -translate-y-1/2 -translate-x-5'
								>
									<svg
										width='12'
										height='18'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M11 1 3 9l8 8'
											stroke='#1D2026'
											stroke-width='3'
											fill='none'
											fill-rule='evenodd'
										/>
									</svg>
								</div>
								<img
									className='md:rounded-[1rem] h-[35rem] mx-auto'
									src={modalImage}
									alt='Selected product'
								/>
								<div
									onClick={() => handleModalNavigate(1)}
									className='absolute cursor-pointer top-1/2 right-0 rounded-full flex justify-center items-center h-10 w-10 bg-white -translate-y-1/2 translate-x-5'
								>
									<svg
										width='13'
										height='18'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='m2 1 8 8-8 8'
											stroke='#1D2026'
											stroke-width='3'
											fill='none'
											fill-rule='evenodd'
										/>
									</svg>
								</div>
							</div>
							<div className='max-md:hidden flex w-[25rem] mx-auto mt-10 justify-between'>
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
												onClick={() => handleModalImageChange(main)}
												className='absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg cursor-pointer'
											></div>
										</div>
										{modalImage === main && (
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
