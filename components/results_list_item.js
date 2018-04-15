import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import { Tweet } from "../types";
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

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
            <ListItemText primary={
                <a style={{textDecoration: 'none', outline: 0}} href={`https://www.twitter.com/${props.tweet.user.screen_name}`}>
                    <Typography variant='subheading' gutterBottom color='secondary'>
                        {props.tweet.user.name}
                    </Typography>
                    <Typography variant='body2' gutterBottom color='textSecondary'>
                        {`@${props.tweet.user.screen_name}`}
                    </Typography>
                </a>
            } secondary={props.tweet.text} />
        </ListItem>
    );
}

export default withStyles(style)(ResultsListItem);