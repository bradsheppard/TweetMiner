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
    +user: User,
    +extended_entities: ExtendedEntities
}

export type User = {
    +name: string,
    +screen_name: string,
    +profile_image_url_https: string,
}

export type ExtendedEntities = {
    +media: Array<Media>
}

export type Media = {
    +video_info: VideoInfo
}

export type VideoInfo = {
    +variants: Array<Variant>
}

export type Variant = {
    +bitrate: number,
    +url: string
}