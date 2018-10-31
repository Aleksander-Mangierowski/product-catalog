import React, { Component } from 'react';
import Aside from './Aside';
import Main from './Main';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="main-wrp">
                        <Aside />

                        <Main/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;