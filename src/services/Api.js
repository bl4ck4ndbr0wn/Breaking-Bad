import axios from 'axios/index';

// Backend API URL
export const API_HOST = 'https://www.breakingbadapi.com/api';

const joinString = (value) => value.split(' ').join('+');

export const api = {
  characters: {
    fetchAll: () => axios.get(`${API_HOST}/characters`),
    fetchById: id => axios.get(`${API_HOST}/characters/${id}`),
    fetchByName: value => axios.get(`${API_HOST}/characters?name=${joinString(value)}`),
  },
  quotes: {
    fetchAll: () => axios.get(`${API_HOST}/quotes`),
    fetchById: id => axios.get(`${API_HOST}/quotes/${id}`),
    fetchByAuthor: author => axios.get(`${API_HOST}/quote?author=${joinString(author)}`),
  },
  episodes: {
    fetchAll: () => axios.get(`${API_HOST}/episodes`),
    fetchById: id => axios.get(`${API_HOST}/episodes/${id}`),
  },
  deaths: {
    count: () => axios.get(`${API_HOST}/death-count`),
    fetchAll: () => axios.get(`${API_HOST}/deaths`),
  },
};
