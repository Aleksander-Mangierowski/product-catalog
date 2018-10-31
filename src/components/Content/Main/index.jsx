import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Products from './Products';
import SpecificProduct from './SpecificProduct';
import { getProducts } from '../../../actions/products';


const mapStateToProps = state => {
    return {
        products: state.products.products,
        productsAreLoading: state.products.productsAreLoading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => dispatch(getProducts()),
    };
};


class Main extends Component {

    componentDidMount() {

        this.props.getProducts();
    }

    
    render() {
        return (
            <MainWrp>
                <div className="right-half-row">
                    <Switch>
                        <Route
                            exact path="/"
                            render={() => (
                                <Products 
                                    products={this.props.products}
                                    productsAreLoading={this.props.productsAreLoading} />
                            )}
                        />

                        <Route
                            path="/products/:id/"
                            render={() => (
                                <SpecificProduct
                                    products={this.props.products}
                                    productsAreLoading={this.props.productsAreLoading} />
                            )}
                        />
                    </Switch>
                </div>
            </MainWrp>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));


const MainWrp = styled.main`
    @media (min-width: 768px) {
        flex: 1 0 calc(100% - 250px);
    }
`;