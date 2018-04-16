import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import { Tweet } from "../types";
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import _ from 'lodash';

type Props = {
    tweet: Tweet
}

const style = {
    avatar: {
        margin: 10,
        width: 60,
        height: 60,
    }
};

function ResultsListItem(props: Props) {
    const { classes } = props;

    // The actual profile image twitter uses ends in '400x400'. The one provided by the API ends in 'normal'.
    // The 400x400 one is of much better quality, so use that one instead.
    const imageUrl = props.tweet.user.profile_image_url_https.replace('normal', '400x400');

    return (
        <ListItem divider={true}>
            <Avatar src={imageUrl} className={classes.avatar} />
            <ListItemText primary={renderPrimary(props)} secondary={renderSecondary(props)} />
        </ListItem>
    );
}

function renderPrimary(props: Props) {
    return (
        <a style={{textDecoration: 'none', outline: 0}} href={`https://www.twitter.com/${props.tweet.user.screen_name}`}>
            <Typography variant='subheading' gutterBottom color='secondary'>
                {props.tweet.user.name}
            </Typography>
            <Typography variant='body2' gutterBottom color='textSecondary'>
                {`@${props.tweet.user.screen_name}`}
            </Typography>
        </a>
    );
}

function renderSecondary(props: Props) {
    const { tweet } = props;

    const source = _.get(tweet, 'extended_entities.media[0].video_info.variants[0].url');

    if(source)
        return(
            <div>
                <Typography color='textSecondary'>
                    {props.tweet.text}
                </Typography>
                <video style={{width: '100%', height: '100%'}} controls>
                    <source src={source} type="video/mp4" />
                </video>
            </div>
        );

    return props.tweet.text;
}

export default withStyles(style)(ResultsListItem);