import {api} from '../../services/Api';
import {characterConstants} from '../contants';


export const characterActions = {
  fetchAll,
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

function fetchAll(page = 0) {
  return (dispatch) => {
    dispatch(loading());
    return api.characters
      .fetchAll(page)
      .then(results => {
        // update Store
        dispatch(success({
          data: results.data,
          currentPage: page,
        }));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
}