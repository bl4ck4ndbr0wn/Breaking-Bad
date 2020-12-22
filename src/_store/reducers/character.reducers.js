import {characterConstants} from '../contants';


const INITIAL_STATE = {
  loading: false,
  data: [],
  currentPage: 0,
};

export function characters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case characterConstants.LOADING:
      return {
        loading: true,
      };
    case characterConstants.FETCH_ALL:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        loading: false,
      };
    case characterConstants.ERROR_FETCHING:
      return INITIAL_STATE;
    default:
      return state;
  }
}
