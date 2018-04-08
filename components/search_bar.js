// @flow

import React from 'react';
import { connect } from 'react-redux';
import { getTweets, searchTermChange } from '../actions';

import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Sticky } from 'react-sticky';

import type { SearchTerm } from '../types';

type StickyProps = {
    style: Object,
    isSticky: boolean
};

type SearchBarState = {
    +searchTerm: SearchTerm,
    +searchTermChange: string => void,
    +getTweets: string => void,
    +classes: Object
}

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
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
        fontSize: 16,
        padding: '1em 1em',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    }
});

class SearchBar extends React.Component<SearchBarState> {

    render() {
        const { classes, renderSticky } = this.props;

        return(
            <Sticky>
                {
                    ({style, isSticky}: StickyProps) => {
                        return this.getSearchBar(classes, style);
                    }
                }
            </Sticky>
        );
    }

    getSearchBar(classes: Object, style: Object) {
        return (
            <Grid container
                  style={style}
                  className={classes.searchArea}
                  alignItems='center'
                  direction='row'
                  justify='center'>
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
            </Grid>
        );
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

function mapStateToProps({ searchTerm }) {
    return {
        searchTerm
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchBar));