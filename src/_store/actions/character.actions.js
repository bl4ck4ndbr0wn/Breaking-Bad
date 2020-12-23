import {api} from '../../services/Api';
import {characterConstants} from '../contants';


export const characterActions = {
  fetchAll,
  fetchByName,
  fetchById,
};

function loading() {
  return {type: characterConstants.LOADING};
}

function success(data) {
  return {type: characterConstants.FETCH_ALL, payload: data};
}

function failure(error) {
  return {type: characterConstants.ERROR_FETCHING, error};
}

function fetchAll() {
  return (dispatch) => {
    dispatch(loading());
    return api.characters
      .fetchAll()
      .then(results => {
        // update Store
        dispatch(success(results.data));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
}


function fetchByName(value = '') {
  return (dispatch) => {
    dispatch(loading());
    return api.characters
      .fetchByName(value)
      .then(results => {
        // update Store
        dispatch(success(results.data));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
}

function fetchById(value = 0) {
  return (dispatch) => {
    dispatch(loading());
    return api.characters
      .fetchById(value)
      .then(results => {
        // update Store
        dispatch({type: characterConstants.FETCH_ONE, payload: results.data});
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
}