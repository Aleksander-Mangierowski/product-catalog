import React, { Component } from 'react';
import styled from 'styled-components';


class Review extends Component {

    render() {
        const {  text, rate } = this.props.review;

        return (
            <ReviewtWrp>
                <div className="card-description">{text}</div>

                <div className="likes">
                    <span>{rate}</span>
                    <i className="fas fa-star" />
                </div>
            </ReviewtWrp>
        );
    }
}

export default Review;


const ReviewtWrp = styled.li`
    font-size: 1.5rem;
    margin: 40px 0 20px;
    border-bottom: 1px solid #444;
    line-height: 1.67;
    
`;