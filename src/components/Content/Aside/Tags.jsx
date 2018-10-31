import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../../styles';

class Tags extends Component {
    render() {
        return (
            <TagsWrp colors={ colors }>
                <a href="#">html</a>
                <a href="#">css</a>
                <a href="#">js</a>
                <a href="#">php</a>
                <a href="#">.net</a>
                <a href="#">java</a>
                <a href="#">python</a>
                <a href="#">react.js</a>
                <a href="#">c#</a>
                <a href="#">vue.js</a>
            </TagsWrp>
        );
    }
}

export default Tags;

const TagsWrp = styled.div`
    a {
        display: inline-block;
        color: ${props => props.colors.blueAnchor};
        background-color: ${props => props.colors.headerBg};
        border: ${props => '1px solid ' + props.colors.mainText};
        border-radius: 5px;
        padding: 5px;
        margin: 3px 2px;
    }
`;
