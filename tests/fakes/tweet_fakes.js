import type { Tweet, User } from '../../types';
import type { TweetState } from '../../reducers/tweet_reducer';

export const user: User = {
    name: 'joe smith',
    profile_image_url_https: 'some_image.jpg'
};

export const tweet: Tweet = {
    created_at: 'some date',
    text: 'some tweet',
    user: user
};

export const twitterApiResponse = {
    statuses: [tweet]
};

export const emptyTweetState: TweetState = {
    loading: false,
    tweets: []
};

export const loadedTweetState: TweetState = {
    loading: false,
    tweets: twitterApiResponse.statuses
};