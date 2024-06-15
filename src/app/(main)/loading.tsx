import React from 'react';

const loading = () => {
	return (
		<div className='h-full flex items-center justify-center' aria-label='loading'>
			<div className='animate-spin h-10 w-10 border-4 rounded-full border-green-400 border-t-transparent    '> </div>
		</div>
	);
};

export default loading;
