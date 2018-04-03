import reducer from '../../reducers/tweet_reducer';
import { RECEIVE_TWEETS, REQUEST_TWEETS } from '../../actions';
import { tweets } from '../fakes/tweets';

describe('Tweet reducer', () => {

    it('Handles initial state', () => {
        expect(reducer(undefined, {})).toEqual([]);
    });

    it('Handle request tweets', () => {
        expect(reducer(tweets, {
            type: REQUEST_TWEETS
        })).toEqual([]);
    });

    it('Handle receive tweets', () => {
        expect(reducer(tweets, {
            type: RECEIVE_TWEETS,
            tweets: tweets
        })).toEqual(tweets.statuses);
    });
});