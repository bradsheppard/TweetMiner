// @flow

import { SEARCH_TERM_CHANGE} from '../actions';
import type { SearchTermChangeAction } from '../actions';
import type { SearchTerm } from '../types';

export default (state: SearchTerm = '', action: SearchTermChangeAction): SearchTerm => {
    switch(action.type) {
        case SEARCH_TERM_CHANGE:
            return action.searchTerm;
        default:
            return state
    }
}