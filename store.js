import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import tweetReducer from './reducers/tweet_reducer';
import searchTermReducer from './reducers/search_term_reducer';

const rootReducer = combineReducers({
    tweets: tweetReducer,
    searchTerm: searchTermReducer
});

export const initStore = () => {
    return createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};