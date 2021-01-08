import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from '../VideoList';
import VideoItem from './VideoItem';
import useCreamHeroes from '../../../hook/useCreamHeroes';

const VideoMenu = () => {
	const [videos, searchVideos] = useCreamHeroes('디디');
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
		<div className='ui container'>
			<SearchBar onFormSubmit={searchVideos} />
			<div>
				<VideoItem video={selectedVideo} />
				<VideoList videos={videos} onVideoSelect={setSelectedVideo} />
			</div>
		</div>
	);
};

export default VideoMenu;
