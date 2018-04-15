// @flow

import type { SearchTermState } from '../reducers/search_term_reducer';

export type Tweets = Array<Tweet>

export type State = {
    +searchTerm: SearchTermState,
    +tweets: Tweets
};

export type Tweet = {
    +text: string,
    +created_at: string,
    +user: User
}

export type User = {
    +name: string,
    +screen_name: string,
    +profile_image_url_https: string
}
