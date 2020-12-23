import {api} from '../../services/Api';
import {quotesConstants} from '../contants';


export const quotesActions = {
  fetchAll,
  fetchByAuthor,
};

function loading() {
  return {type: quotesConstants.LOADING};
}

function success(data) {
  return {type: quotesConstants.FETCH_ALL, payload: data};
}

function failure(error) {
  return {type: quotesConstants.ERROR_FETCHING, error};
}

function fetchAll() {
  return (dispatch) => {
    dispatch(loading());
    return api.quotes
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

function fetchByAuthor(author) {
  return (dispatch) => {
    dispatch(loading());
    return api.quotes
      .fetchByAuthor(author)
      .then(results => {
        // update Store
        dispatch(success(results.data));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
}
