import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useKittisaurus = defaultSearchTerm => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

	const search = async term => {
		const response = await youtube.get('/search', {
			params: {
				channelId: 'UCwcsDWGip6vtiZyCnvDoClQ',
				type: 'video',
				q: term
			}
		});
		console.log(response.data.items);
		setVideos(response.data.items);
	};

	return [videos, search];
};

export default useKittisaurus;

// 크림히어로즈 : UCmLiSrat4HW2k07ahKEJo4w
// Kittisaurus : UCwcsDWGip6vtiZyCnvDoClQ
// 크집사 : UCkuA_gDjISfGgbdp02BUwyQ
