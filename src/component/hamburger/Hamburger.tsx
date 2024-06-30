'use client'; // Client component を示す

import { useState } from 'react';

export default function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='bg-gray-800 text-white block md:hidden'>
			<div className='container mx-auto px-4 py-4'>
				<div className='flex items-center justify-between'>
					<a href='/' className='text-xl font-bold'>
						Nextjs Tasks
					</a>

					<button onClick={toggleMenu}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							{isOpen ? (
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
							) : (
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
							)}
						</svg>
					</button>
				</div>

				<div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}>
					<ul className='mt-4'>
						<li className='py-2'>
							<a href='/' className='block px-4 py-2 rounded hover:bg-gray-700'>
								All Tasks
							</a>
						</li>
						<li className='py-2'>
							<a href='/completed' className='block px-4 py-2 rounded hover:bg-gray-700'>
								Completed Tasks
							</a>
						</li>
						<li className='py-2'>
							<a href='/expired' className='block px-4 py-2 rounded hover:bg-gray-700'>
								Expired Tasks
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
