import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';

import history from '../../utils/history';
import {characters} from './character.reducers';


/**
 * Combine all reducers in this file and export the combined reducers.
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    /* Add different redux states. */
    characters,

    router: connectRouter(history),
    ...injectedReducers,
  });
}
