// @flow

import { SEARCH_TERM_CHANGE} from '../actions';
import type { SearchTermChangeAction } from '../actions';

export type SearchTermState = string;

export default (state: SearchTermState = '', action: SearchTermChangeAction): SearchTermState => {
    switch(action.type) {
        case SEARCH_TERM_CHANGE:
            return action.searchTerm;
        default:
            return state
    }
}