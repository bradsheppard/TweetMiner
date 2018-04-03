import type { Tweet, User } from '../../types';

export const user: User = {
    name: 'joe smith',
    profile_image_url_https: 'some_image.jpg'
};

export const tweet: Tweet = {
    created_at: 'some date',
    text: 'some tweet',
    user: user
};

export const tweets = {
    statuses: [tweet]
};