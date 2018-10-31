import React, { Component } from 'react';

import Review from './Review';
import NewReview from './NewReview';


class Reviews extends Component {

    render() {
        const reviews = this.props.reviews.map(review => <Review key={review.id} review={review} />);

        return (
            <React.Fragment>
                <ul className="col">
                    {reviews}
                </ul>

                <NewReview id={this.props.id}/>
            </React.Fragment>
        );
    }
}

export default Reviews;