// @flow

import React from 'react';
import { connect } from 'react-redux';
import { getTweets, searchTermChange } from '../actions';

import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';
import { Sticky } from 'react-sticky';

import type { SearchTermState } from '../reducers/search_term_reducer';
import type { TweetState } from '../reducers/tweet_reducer';

type StickyProps = {
    style: Object
};

type SearchBarState = {
    +searchTerm: SearchTermState,
    +tweets: TweetState,
    +searchTermChange: string => void,
    +getTweets: string => void,
    +classes: Object,
    +noSticky: boolean
}

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    circularProgress: {
        marginLeft: '2em'
    },
    searchArea: {
        backgroundColor: theme.palette.secondary.main,
        paddingBottom: '8em',
        paddingTop: '8em',
        zIndex: 1
    },
    button: {
        width: '100%',
        height: '100%'
    },
    textFieldRoot: {
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    textFieldInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 20,
        padding: '1em 1em',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow'])
    }
});

class SearchBar extends React.Component<SearchBarState> {

    render() {
        const { classes, noSticky } = this.props;

        if(noSticky)
            return this.renderSearchBar(classes);

        return(
            <Sticky>
                {
                    ({ style }: StickyProps) => {
                        return this.renderSearchBar(classes, style);
                    }
                }
            </Sticky>
        );
    }

    renderSearchBar(classes: Object, style?: Object) {
        return (
            <Grid container
                  style={style}
                  className={classes.searchArea}
                  alignItems='center'
                  direction='row'
                  justify='center'>
                <Grid item sm={3} />
                <Grid item xs={12} sm={6}>
                    <form id='searchForm' className={classes.container}
                          onSubmit={this.onFormSubmit.bind(this)}>
                        <Grid container>
                            <Grid item xs={12} sm={10}>
                                <Input
                                    id='searchTerm'
                                    label='Input'
                                    disableUnderline={true}
                                    value={this.props.searchTerm}
                                    fullWidth={true}
                                    /*className={classes.input}*/
                                    onChange={this.onInputChange.bind(this)}
                                    classes={{
                                        root: classes.textFieldRoot,
                                        input: classes.textFieldInput,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <Button type='submit' variant='raised' color='primary'
                                        className={classes.button}>
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid item sm={3}>
                    {this.renderLoadingBar()}
                </Grid>
            </Grid>
        );
    }

    renderLoadingBar() {
        if(this.props.tweets.loading)
            return <CircularProgress size={50} className={this.props.classes.circularProgress}/>
    }

    onInputChange(event: any) {
        this.props.searchTermChange(event.target.value);
    }

    onFormSubmit(event: any) {
        event.preventDefault();
        this.props.getTweets(this.props.searchTerm);
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getTweets: searchTerm => {
            dispatch(getTweets(searchTerm));
        },
        searchTermChange: searchTerm => {
            dispatch(searchTermChange(searchTerm));
        }
    };
}

function mapStateToProps({ searchTerm, tweets }) {
    return {
        searchTerm,
        tweets
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchBar));