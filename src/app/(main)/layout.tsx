import Sidemenu from '@/component/SideMenu/Sidemenu';
import React from 'react';

const MainLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='flex h-screen'>
			<Sidemenu />
			<main className='bg-slate-100 flex-1 overflow-auto'>{children}</main>
		</div>
	);
};

export default MainLayout;
