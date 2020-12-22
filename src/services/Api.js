import axios from 'axios/index';

// Backend API URL
export const API_HOST = 'https://www.breakingbadapi.com/api';

/**
 * Reproduce query parameters to limit the number of characters retrieved.
 * @param page
 * @param count
 * @return {string}       Properly formatted initials.
 */
const limit = (count = 10, page = 0) => `limit=${count}&offset=${page * count}`;


export const api = {
  characters: {
    fetchAll: page => axios.get(`${API_HOST}/characters/?${limit(10, page)}`),
    fetchById: id => axios.get(`${API_HOST}/characters/${id}`),
  },
  quotes: {
    fetchAll: page => axios.get(`${API_HOST}/quotes/?${limit(10, page)}`),
    fetchById: id => axios.get(`${API_HOST}/quotes/${id}`),
    fetchByAuthor: author => axios.get(`${API_HOST}/quote?author=${author}`),
  },
  episodes: {
    fetchAll: page => axios.get(`${API_HOST}/episodes/?${limit(10, page)}`),
    fetchById: id => axios.get(`${API_HOST}/episodes/${id}`),
  },
  deaths: {
    count: page => axios.get(`${API_HOST}/death-count`),
    fetchAll: page => axios.get(`${API_HOST}/deaths/?${limit(10, page)}`),
  },
};
