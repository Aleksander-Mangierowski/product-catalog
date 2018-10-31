import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { getReviews } from '../../../../actions/reviews';

import Reviews from './Reviews/';



const mapStateToProps = state => {
    return {
        reviews: state.reviews.reviews,
        reviewsAreLoading: state.reviews.reviewsAreLoading,
        isAuth: state.users.isAuth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getReviews: id => dispatch(getReviews(id))
    };
};



class SpecificProduct extends Component {

    componentDidMount() {
        this.props.getReviews(this.props.match.params.id);
    }

    render() {
        const productId = parseInt(this.props.match.params.id);
        const { products, reviews, isAuth } = this.props;

        let product = {};
        [...products].some(item => {
            if (item.id === productId) {
                product = item;
                return true;
            }
            return false;
        });

        if (products.length === 0) return null;

        const sum = reviews.reduce(
            (accumulator, review) => accumulator + review.rate,
            0
        );

        const rate = Math.round(sum / reviews.length);

        const { title, img, text } = product;
        const imgSrc = img.startsWith('http')
            ? img
            : 'http://via.placeholder.com/150x150';

        return (
            <React.Fragment>
                <div className="col">
                    <div className="post">
                        <div className="post-img">
                            <img src={imgSrc} alt={img} />
                        </div>

                        <div className="post-body">
                            <div className="post-title">{title}</div>

                            <div className="post-description">{text}</div>

                            <div className="post-tags">
                                Tags:
                                <ul>
                                    <li>
                                        <a href="#">Business</a>
                                    </li>
                                </ul>
                            </div>

                            <CardsFooter>
                                <div className="likes">
                                    <span>{rate}</span>
                                    <i className="fas fa-star" />
                                </div>

                                <div className="comments">
                                    <span>{reviews.length}</span>
                                    <i className="far fa-comment-alt" />
                                </div>
                            </CardsFooter>
                        </div>
                    </div>
                </div>

                <Reviews reviews={reviews} id={productId} isAuth={isAuth} />
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpecificProduct));


const CardsFooter = styled.div`
    display: flex;
    justify-content: space-between;
    i {
        color: #2980b9;
        margin-left: 5px;
    }
    .comments i {
        vertical-align: middle;
    }
`;