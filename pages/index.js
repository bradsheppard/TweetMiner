import React from 'react';
import Header from '../components/header';
import SearchBar from '../components/search_bar';
import Results from '../components/results';
import HtmlHead from '../components/html_head';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';

const searchAreaStyle = {
    backgroundColor: '#4DB7FE'
};

class Index extends React.Component {
    render() {
        return (
            <div className="App">
                <HtmlHead/>
                <div className='p-0 container-fluid'>
                    <Header/>
                    <div className='jumbotron jumbotron-fluid' style={searchAreaStyle}>
                        <div className='container'>
                            <SearchBar/>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <Results/>
                </div>
            </div>
        );
    }
}

export default withRedux(initStore)(Index)