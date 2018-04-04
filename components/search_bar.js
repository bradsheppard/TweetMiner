// @flow

import React from 'react';
import { connect } from 'react-redux';
import { getTweets, searchTermChange } from '../actions';

import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';

import type { SearchTerm } from '../types';

type SearchBarState = {
    +searchTerm: SearchTerm,
    +searchTermChange: string => void,
    +getTweets: string => void
}

const styles = theme => ({
    textFieldStyle: {
        width: '100%'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
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
        padding: '10px 12px',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    textFieldFormLabel: {
        fontSize: 18,
    },
});

class SearchBar extends React.Component<SearchBarState> {

    render() {
        const { classes } = this.props;

        return(
            <form onSubmit={this.onFormSubmit.bind(this)}>
                <Input
                    label="Bootstrap"
                    id="bootstrap-input"
                    disableUnderline={true}
                    className={classes.textFieldStyle}
                    value={this.props.searchTerm}
                    onChange={this.onInputChange.bind(this)}
                    classes={{
                        root: classes.textFieldRoot,
                        input: classes.textFieldInput,
                    }}
                />
                <Button type='submit' variant="raised" color="primary" className={classes.button}>
                    Primary
                </Button>
            </form>
        );
    }

    /*render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)}>
                <div className='row no-gutters'>
                    <div className='col'>
                        <input type='text' value={this.props.searchTerm} onChange={this.onInputChange.bind(this)} className='form-control form-control-lg' id='searchTerm' />
                    </div>
                    <div className='col-auto'>
                        <input type="submit" value="Submit" id='form-submit' className='form-control form-control-lg' />
                    </div>
                </div>
            </form>
        );
    }*/

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