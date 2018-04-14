import reducer from '../../reducers/tweet_reducer';
import { RECEIVE_TWEETS, REQUEST_TWEETS } from '../../actions';
import { loadedTweetState, emptyTweetState, twitterApiResponse } from '../fakes/tweet_fakes';

describe('Tweet reducer', () => {

    it('Handles initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            tweets: [],
            loading: false
        });
    });

    it('Handle request tweets', () => {
        expect(reducer(emptyTweetState, { type: REQUEST_TWEETS } )).toEqual({
            tweets: [],
            loading: true
        });
    });

    it('Handle receive tweets', () => {
        expect(reducer(loadedTweetState, {
            type: RECEIVE_TWEETS,
            tweets: twitterApiResponse
        })).toEqual({
            loading: false,
            tweets: twitterApiResponse.statuses
        });
    });
});