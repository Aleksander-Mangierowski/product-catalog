import React, { Component } from 'react';

import Product from './Product';
import { ProductsWrp } from '../../../styles';


class Products extends Component {

    render() {
        const products = this.props.products.map(product => <Product key={product.id} product={product}/>);
        
        return (
            <ProductsWrp>
                { products }
            </ProductsWrp>
        );
    }
}

export default Products;