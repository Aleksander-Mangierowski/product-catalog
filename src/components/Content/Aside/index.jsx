import React, { Component } from 'react';

import AsideCard from './AsideCard';
import SubscribeForm from './SubscribeForm';
import AsideSearch from './AsideSearch';
import Tags from './Tags';
import AsideComments from './AsideComments';


class Aside extends Component {
    render() {
        return (
            <aside>
                <AsideCard />

                <SubscribeForm />

                <AsideSearch />

                <Tags />

                <AsideComments />
            </aside>
        );
    }
}

export default Aside;