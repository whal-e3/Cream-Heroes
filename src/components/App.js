import React from 'react';

import Route from './Route';
import KittiMenu from './videoMenu/kittisaurus/VideoMenu';
import CreamMenu from './videoMenu/creamHeroes/VideoMenu';
import ButlerMenu from './videoMenu/butler/VideoMenu';

const App = () => {
	return (
		<div>
			<Route>
				<CreamMenu />
			</Route>
			<Route>
				<KittiMenu />
			</Route>
			<Route>
				<ButlerMenu />
			</Route>
		</div>
	);
};

export default App;
