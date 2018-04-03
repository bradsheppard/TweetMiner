import React from 'react';

import { Tweet } from "../types";

type Props = {
    tweet: Tweet
}

export default (props: Props) => {
    return (
        <div className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="mb-2 d-flex w-100 justify-content-between">
                <img className='mr-2' src={props.tweet.user.profile_image_url_https} />
                <strong>{props.tweet.user.name}</strong>
                <small className='ml-auto'>{props.tweet.created_at}</small>
            </div>
            <p className='mb-0'>{props.tweet.text}</p>
        </div>
    );
};