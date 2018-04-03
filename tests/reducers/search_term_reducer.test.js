import reducer from '../../reducers/search_term_reducer';
import { SEARCH_TERM_CHANGE } from '../../actions';

describe('Search term reducer', () => {

    it('Handles initial state', () => {
        expect(reducer(undefined, {})).toEqual('');
    });

    it('Handles search term changes', () => {
        expect(
            reducer([], {
                type: SEARCH_TERM_CHANGE,
                searchTerm: 'test term'
            })
        ).toEqual(
            'test term'
        );
    });
});