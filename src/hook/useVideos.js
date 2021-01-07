import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useVideos = defaultSearchTerm => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

	const search = async term => {
		const response = await youtube.get('/search', {
			params: {
				channelId: 'UCmLiSrat4HW2k07ahKEJo4w',
				channelId: 'UCwcsDWGip6vtiZyCnvDoClQ',
				channelId: 'UCkuA_gDjISfGgbdp02BUwyQ',
				type: 'video',
				q: term
			}
		});
		console.log(response.data.items);
		setVideos(response.data.items);
	};

	return [videos, search];
};

export default useVideos;
