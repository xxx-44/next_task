import Sidemenu from '@/component/SideMenu/Sidemenu';
import HamburgerMenu from '@/component/hamburger/Hamburger';
import React from 'react';

const MainLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='flex h-screen'>
			<Sidemenu />
			<main className='bg-slate-100 flex-1 overflow-auto'>
				<HamburgerMenu />
				{children}
			</main>
		</div>
	);
};

export default MainLayout;
