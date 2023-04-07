import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '0b52f98374de4a25837b997c9abe4b2d',
  },
});
