// @flow

import React from 'react';
import { connect } from 'react-redux';
import { getTweets, searchTermChange } from '../actions';

import type { SearchTerm } from '../types';

type SearchBarState = {
    +searchTerm: SearchTerm,
    +searchTermChange: string => void,
    +getTweets: string => void
}

class SearchBar extends React.Component<SearchBarState> {

    render() {
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);