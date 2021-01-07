import React from 'react';

const Header = () => {
	return (
		<div className='ui secondary pointing menu'>
			<Link href='/' className='item'>
				Cream Heroes
			</Link>
			<Link href='/kittisaurus' className='item'>
				Kittisaurus
			</Link>
			<Link href='/claireLuvcat' className='item'>
				Claire Luvcat
			</Link>
		</div>
	);
};

export default Header;
