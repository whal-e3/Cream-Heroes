import axios from 'axios';

const KEY = 'AIzaSyDEnBIVEXD-R1S46BYWBMSMNqMICAlWBXI';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: { part: 'snippet', maxResults: 10, key: KEY }
});
