import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductListing from '../Components/ProductListing';

class ShoppingCart extends React.Component {
  render() {
    const { shopCart } = this.props;
    return (
      <main>
        {shopCart.length !== []
          ? (
            shopCart.map(({ id, title, price, thumbnail }) => (
              <ProductListing
                key={ id }
                title={ title }
                price={ price }
                thumbnail={ thumbnail }
              />
            ))
          )
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        <Link to="/">
          Continuar comprando
        </Link>
      </main>
    );
  }
}

ShoppingCart.propTypes = {
  shopCart: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ShoppingCart;
