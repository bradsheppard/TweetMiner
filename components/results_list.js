// @flow

import React from 'react';
import ResultsListItem from './results_list_item';
import List from 'material-ui/List';

import { withStyles } from 'material-ui/styles';

import type { Tweets } from '../types';

type Props = {
    +tweets: Tweets,
    +classes: any
}

const styles = theme => ({
    list: {
        backgroundColor: theme.palette.primary.main,
    }
});

/**
 * @return {null}
 */
function ResultsList(props: Props) {
    const { classes } = props;

    if(props.tweets.length > 0)
        return (
            <List className={classes.list}>
                {
                    props.tweets.map((tweet, index) => <ResultsListItem key={index} tweet={tweet} />)
                }
            </List>
        );
    return null;
}

export default withStyles(styles)(ResultsList);