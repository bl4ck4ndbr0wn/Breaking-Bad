import {quotesConstants} from '../contants';


const INITIAL_STATE = {
  loading: false,
  data: [],
};

export function quotes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case quotesConstants.LOADING:
      return {
        loading: true,
      };
    case quotesConstants.FETCH_ALL:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case quotesConstants.ERROR_FETCHING:
      return INITIAL_STATE;
    default:
      return state;
  }
}
