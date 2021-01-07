import axios from 'axios';

const KEY = 'AIzaSyDrFMn-mlxqvv2F2e_zyi4XKRww7MfqzKo';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: { part: 'snippet', maxResults: 3, key: KEY }
});
