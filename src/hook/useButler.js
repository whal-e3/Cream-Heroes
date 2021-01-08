import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useButler = defaultSearchTerm => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

	const search = async term => {
		const response = await youtube.get('/search', {
			params: {
				channelId: 'UCkuA_gDjISfGgbdp02BUwyQ',
				type: 'video',
				q: term
			}
		});

		setVideos(response.data.items);
	};

	return [videos, search];
};

export default useButler;
