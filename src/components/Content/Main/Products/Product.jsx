import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import { getReviews } from '../../../../actions/reviews';
import { CardWrp } from '../../../styles';


const mapStateToProps = state => {
    return {
        reviews: state.reviews.reviews,
        reviewsAreLoading: state.reviews.reviewsAreLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // getReviews: id => dispatch(getReviews(id))
    };
};



class Product extends Component {

    componentDidMount() {
        // this.props.getReviews(this.props.product.id);
    }

    render() {
        const { product: { id, title, img, text }, reviews } = this.props;

        const imgSrc = img.startsWith('http') ? img : 'http://via.placeholder.com/150x150';
        
        const link = '/products/' + id + '/';

        return (
            <ProductWrp>
                <CardWrp>
                    <Link to={link} />

                    <div className="card-img">
                        <img src={imgSrc} alt={img} />
                    </div>

                    <div className="card-body">
                        <div className="card-title">{title}</div>

                        <div className="card-description">{text}</div>

                        <div className="card-footer">
                            <div className="likes">
                                <span>4</span>
                                <i className="fas fa-star" />
                            </div>

                            <div className="comments">
                                <span>7</span>
                                <i className="far fa-comment-alt" />
                            </div>
                        </div>
                    </div>
                </CardWrp>
            </ProductWrp>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);


const ProductWrp = styled.div`
    width: 100%;
    padding: 15px;
    @media (min-width: 576px) {
        width: 50%;
    }
    @media (min-width: 768px) {
        width: 100%;
    }
    @media (min-width: 992px) {
        width: 50%;
    }
    @media (min-width: 1200px) {
        width: calc(100% / 3);
    }
`;