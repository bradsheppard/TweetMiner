import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import { Tweet } from "../types";
import Avatar from 'material-ui/Avatar';

type Props = {
    tweet: Tweet
}

export default (props: Props) => {
    return (
        <ListItem divider={true}>
            <Avatar src={props.tweet.user.profile_image_url_https} />
            <ListItemText primary={props.tweet.user.name} secondary={props.tweet.text} />
        </ListItem>
    );
};