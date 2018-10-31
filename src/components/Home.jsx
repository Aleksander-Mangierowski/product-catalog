import React, { Component } from 'react';

import Header from './Header/';
import Content from './Content/';
import Footer from './Footer';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />

                <Content />

                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;
