'use client';
import { error } from 'console';
import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
	console.error(error);
	return (
		<div className='h-screen flex flex-col justify-center items-center bg-sky-50 text-gray-900'>
			<h1 className='text-8xl font-bold'>ERROR</h1>
			<p className='text-4xl font-medium'>Unxepected error occurred</p>
			<Link href='/' className='mt-4 text-xl text-blue-600 hover:underline'>
				Back to Home
			</Link>
		</div>
	);
};

export default ErrorPage;
