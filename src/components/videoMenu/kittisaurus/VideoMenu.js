import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from '../VideoList';
import VideoItem from './VideoItem';
import useKittisaurus from '../../../hook/useKittisaurus';

const VideoMenu = () => {
	const [videos, searchVideos] = useKittisaurus('루루');
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
