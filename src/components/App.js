import React from 'react';

import Header from './Header';
import Route from './Route';
import KittiMenu from './videoMenu/kittisaurus/VideoMenu';
import CreamMenu from './videoMenu/creamHeroes/VideoMenu';
import ButlerMenu from './videoMenu/butler/VideoMenu';

const App = () => {
	return (
		<div>
			<Header />
			<Route path='/'>
				<CreamMenu />
			</Route>
			<Route path='/kittisaurus'>
				<KittiMenu />
			</Route>
			<Route path='/claireLuvcat'>
				<ButlerMenu />
			</Route>
		</div>
	);
};

export default App;
