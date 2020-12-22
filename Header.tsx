import React from 'react';
import { Menu } from 'wordpress-r';
import { isLoading } from 'wordpress-r';

export default function Header() {
	return (
		<header className="flex items-center justify-between py-2 mt-8">
			<a href={ WPData.url } className="text-blue-800 text-2xl px-2 lg:px-0 font-bold capitalize">
				<span className={ isLoading() ? 'animate-pulse' : '' }>🎄</span> My Site
			</a>
			<button className="block md:hidden px-2 text-3xl">
				<i className='bx bx-menu'></i>
			</button>
			<Menu
				location="header-menu"
				className="hidden md:inline-flex items-center"
				renderItem={ ( item: MenuItem ) => (
					<li className="px-2 md:px-4" key={ item.ID }>
						<a href={ item.url } className="text-green-800 font-semibold hover:text-green-600"> { item.title } </a>
					</li>
				) }
			/>
		</header>
	)
}
