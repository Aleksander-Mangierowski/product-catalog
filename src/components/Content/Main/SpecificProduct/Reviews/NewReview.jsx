import React, { Component } from 'react';
import { connect } from 'react-redux';  
import styled from 'styled-components';

import { postReview } from '../../../../../actions/reviews';

class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            rate: 1
        };
    }

    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    submitReview = evt => {
        evt.preventDefault();

        this.props.dispatch(postReview(this.props.id, this.state));

        this.clearForm();
    };

    clearForm = () => {
        this.setState({ text: '', rate: 1 });
    };

    render() {
        return (
            <div className="col">
                <ReviewtWrp onSubmit={this.submitReview}>
                    <textarea
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                        rows="4"
                        cols="50"
                        required
                    />

                    <input
                        type="number"
                        min="1"
                        max="5"
                        name="rate"
                        value={this.state.rate}
                        onChange={this.handleChange}
                        placeholder="Set rate from 1 to 5"
                        required
                    />

                    <button type="submit" className="btn">
                        Review
                    </button>
                </ReviewtWrp>
            </div>
        );
    }
}

export default connect()(Review);


const ReviewtWrp = styled.form`
    margin-top: 40px;
    textarea,
    input,
    button {
        font-size: 1.5rem;
        border-radius: 0 5px 5px 0;
        padding: 10px 15px;
        margin: 10px 0;
        width: 100%;
    }
    select,
    input {
        flex: 1 0 auto;
        color: #444;
        border-radius: 5px 0 0 5px;
        border: 1px solid darkgray;
    }
    select:focus,
    input:focus {
        outline: 0;
    }
    select {
        background: none;
    }
    input {
        border-radius: 5px;
        padding-right: 45px;
    }
`;