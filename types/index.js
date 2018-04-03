// @flow

export type SearchTerm = string;

export type Tweets = Array<Tweet>

export type State = {
    +searchTerm: SearchTerm,
    +tweets: Tweets
};

export type Tweet = {
    +text: string,
    +created_at: string,
    +user: User
}

export type User = {
    +name: string,
    +profile_image_url_https: string
}
